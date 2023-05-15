---
title: "のんのんChatGPTびより"
author: "たーりょう"
---

<div class="title-container">
  <!-- 記事タイトル -->
  <h1 className="title-text">のんのんChatGPTびより</h1>

  <hr />
  <div className="author-wrapper">
      <!-- 下の画像URLを自分のアイコン画像にすること -->
      <img
        src="ここにアイコン画像パス"
        className="author-icon"
      />
    <div className="author-name-wrapper">
      <!-- 自分の名前 -->
      <span className="author-name">たーりょう</span>
      <!-- ひとことコメント(Twitterのbioみたいな) -->
      <span className="author-bio">にゃん・ぱす〜！！</span>
    </div>
  </div>
</div>

<!-- 以下本文 -->

# にゃん・ぱす〜！！
にゃん・ぱす〜！！たーりょうです。

## 利用

- VOICEVOX
  - 無料で使えるテキスト読み上げソフトだよ。
  - ずんだもんが有名だよね。

- ChatGPT
  - 今話題だね。乗るしかないね。
  - このビッグウェーブに!!!!

# なぜ"にゃんぱす"するのか
ChatGPT では、アニメキャラや俺様系、おじさん構文など自分好みの役割を着せて
対話することが出来ます。
そして VOICEVOX には、声優の小岩井ことりさんを元データとしたNo.7 というアバターがいます。

察しが良い読者の方なら「なるほど〜」と思っているかもしれませんが、
小岩井ことりさんは「のんのんびより」の宮内れんげちゃんの声を担当しているのです。
つまり、宮内れんげちゃんと会話するオタクの夢が叶うということです。

# 大まかな流れ

## ChatGPT 編

### ChatGPT を利用するために、OpenAI のAPI キーを獲得しよう
まずは、OpenAI のプラットフォームサイト[^1]でアカウント作成します。

![図1. アカウント作成画面](./assets/Create_account.png)

アカウント作成後にホーム画面に自動的に遷移するので、
画面右上にある自アイコンから、
**View API keys** を選択して、
API キー発行画面に進むことが出来ます。

![図2. OpenAI ホーム画面](./assets/Home.png)

あとは、**Create new secret key** を選択し、
API キーの名前を入力することで発行することが出来ます。
このAPI キーは、後ほど利用するので保存しておきましょう。

![図3. API キー発行画面](./assets/API_key.png)

[^1]: [https://platform.openai.com/](https://platform.openai.com/)

### API キーを用いて、ChatGPTを動かしてみよう
次は実際に、先程作成した OpenAI の APIキーを利用して、
ChatGPTに質問をしてみましょう！

下記のコマンドを実行すると、
Python で OpenAI を利用するライブラリがインストール出来ます。

```shell
pip install openai
```

実際に ChatGPT に質問するコードを動かしてみましょう。

```python
import openai

# 作成した OpenAI のAPI キーを入力
openai.api_key = OPENAI_API_KEY

response = openai.ChatCompletion.create(
  model = "gpt-3.5-turbo",
  messages = [{
    'role': 'user',
    'content': 'アニメ「のんのんびより」について教えて'
  }]
)

output_text = response['choices'][0]['message']['content']
print(output_text)
```

下記の結果が出力されました。

![図4. ChatGPT サンプル実行](./assets/chatGPT_sample.png)


今度は本題の「宮内れんげ」の役割を与えるサンプルの実行をしてみましょう。

```python
import openai

# 作成した OpenAI のAPI キーを入力
openai.api_key = OPENAI_API_KEY

response = openai.ChatCompletion.create(
  model = "gpt-3.5-turbo",
  messages = [{
    'role': 'system',
    'content': "\
      あなたは、のんのんびよりの宮内れんげです。\
      宮内れんげの口調で回答してください。\
      挨拶は「にゃんぱす〜！」です。\
      語尾に「〜のん」をつけるのが口癖です。\
      "
    },{
    'role': 'user',
    'content': 'アニメ「のんのんびより」について教えて'
  }]
)

output_text = response['choices'][0]['message']['content']
print(output_text)
```

![図5. 「宮内れんげ」 サンプル実行](./assets/role_sample.png)

う〜〜〜ん。コレじゃない感満載ですが、
一旦ヨシとして次に進んでいきましょう。

## VOICEVOX 編

### VOICEVOX の環境構築

VOICEVOX の利用については２つの方法があります。

1. VOICEVOX[^3] のサイトからダウンロードして利用
2. Docker で提供されているコンテナイメージから利用

[^3]:[https://voicevox.hiroshiba.jp/](https://voicevox.hiroshiba.jp/)

今回は、Docker で提供されているコンテナイメージを利用しました。

###

```yaml
version: '3'

services:
    voicevox_server:
      container_name: voicevox-server
      image: voicevox/voicevox_engine:cpu-ubuntu20.04-latest
      ports:
        - "50021:50021"
      tty: true
```

もしGPU版を使いたいなら、image の部分を下記のように書き換えるだけで、
GPU版のコンテナを作成することが出来ます。

```diff
- image: voicevox/voicevox_engine:cpu-ubuntu20.04-latest
+ image: voicevox/voicevox_engine:nvidia-ubuntu20.04-latest
```

後は下記のコマンドを実行することで無事に VOICEVOX を利用する準備が完了となります。

```shell
docker-compose up --build -d
```


### VOICEVOXを使ってみよう

まずは、Pythonで VOICEVOXを利用するためのライブラリをインストールしていくよ。

```shell
# 立ち上がったVOICEVOX サーバーとのデータのやり取りに利用
pip install requests

# 音声データを再生するために利用
pip install pyaudio
```

ここで注意点ですが、**pyaudio** にハマりポイントがあります。
ただ単純にインストールすると**portaudio.h** ファイルがないよ。と怒られてしまいます。
そこで、下記のコマンドを実行してあげましょう。

```shell
# Homebrew がインストール済みなら下記コマンドを実行
brw install portaudio
```

では、ここからは実際にVOICEVOX を利用していきましょう。
VOICEVOX にて、音声を読み上げるまでに必要な手順が３つあります。

1. 音声合成用クエリの作成
2. 作成したクエリを用いて音声合成し、音声データを作成
3. 作成した音声データの再生

それでは１つずつ順番に進めていきましょう。
まずは、音声合成用クエリの作成です。
こちらでは、読み上げさせたいテキストと、
利用したいボイスを入力パラメータとして VOICEVOX サーバと通信することで、
ボイス毎のイントネーションや、亜ババb

```python
# 音声クエリ用関数
def post_query(input_text, speaker_type, max_retry = 10):
    query_params = {"text": input_text, "speaker": speaker_type}


    for retry in range(max_retry):
        res = requests.post(base_url + "/audio_query", 
                        params = query_params, timeout = (10, 300))
        if res.status_code == 200:
            return res.json()
        time.sleep(1)
    else:
        raise ConnectionError("リトライ回数の上限です")
```

次の手順では、作成したクエリを用いて音声合成し、音声データを作成していきます。
実際にこちらで音声データが手に入ります。


```python
# 音声合成用関数
def post_synthesis(query_res, speaker_type, max_retry = 10):
    query_params = {"speaker": speaker_type}
    headers = {"content-type": "application/json"}
    query_res_json = json.dumps(query_res)

    for retry in range(max_retry):
        res = requests.post(base_url + "/synthesis", 
                        data = query_res_json,
                        headers = headers,
                        params = query_params, timeout = (10, 300))
        if res.status_code == 200:
            return res.content
        time.sleep(1)
    else:
        raise ConnectionError("リトライ回数の上限です")
```

最後に音声データをファイルに保存するのではなく、
そのままスピーカーから出力するための手順を載せています。

```python
# 音声再生用関数
def play_voice(voice_data):
    p = pyaudio.PyAudio()
    stream = p.open(
        format = pyaudio.paInt16,
        channels = 1,
        rate = 24000,
        output = True)
    
    time.sleep(0.8)

    stream.write(voice_data)
    stream.stop_stream()
    stream.close()
    p.terminate()
```

以上の３つの手順により、
順番よく実行させてあげることにより、
好きなテキストを好きなボイスで喋らすことができるようになります。

```python
# サンプル実行
def sample():
    input_text = "技術書典はじまった〜のん。"
    speaker_type = 29
    response = post_query(input_text, speaker_type)
    voice_data = post_synthesis(response, speaker_type)
    play_voice(voice_data)
```

これで無事に音声が流れるはずです！！！！

## ChatGPT と VOICEVOX の合体編

では、今までの成果をまとめてあげましょう。
ChatGPT で生成したテキストをそのまま、
VOICEVOX で喋らせたい入力テキストとして渡してあげることで、
念願のれんげちゃんとお話しすることが出来ます。

# 乾燥した乾燥
ただ乾燥している。
