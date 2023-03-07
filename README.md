# Markdown Writing Env

マークダウンでの執筆環境です。

nodeの環境にvoltaを使用していると自動でバージョンが定まります。

> created by [create-book](https://github.com/vivliostyle/create-book).

## プレビューについて

ターミナルで`yarn preview`を実行すると、Chromiumでのプレビューが立ち上がります。  
このプレビューはホットリロードが使えます。  
ホットリロードで出来栄えを確認しながら執筆しましょう。

## PDFのビルドについて

PDFのビルドは`yarn build`で行います。  
暫く待つと`dist`内に`output.pdf`が生成されます。

## vivliostyle.config.jsについて

本の設定については`vivliostyle.config.js`で定義されています。  
本を作る際にはここを書き換えましょう。

## 記法

この環境では、Vivoliostyle Flavored Markdown（以下VFM）を用いています。これは、従来のマークダウンの記法にいくつかの記法が加わったマークダウンの拡張書式です。  
以下のリンクを参考に執筆を進めてください。  
[VFMの紹介（MarkdownでVivliostyle入門 中編その2）](https://zenn.dev/sky_y/articles/markdown-advent-2020-vivliostyle3)
[Vivliostyle Flavored Markdown - VFM: Vivliostyle Flavored Markdown](https://vivliostyle.github.io/vfm/#/vfm)

### 改ページするには?

マークダウン中に`<hr class="page-wrap" />`を書きましょう。

## 図の挿入について

作図する場合はdrawioが便利です。  
vscodeにdrawio extensionを導入し、ファイルの拡張子を`ファイル名.drawio.svg`とすることで、drawio上での編集もでき、直接マークダウンに読み込ませることが可能です。

## 他参考情報

- [74thの技術同人誌執筆環境（Markdown+Vivliostyle+VS Code）](https://zenn.dev/74th/articles/ed2229692ba6c6)
  - この執筆環境を作る際、参考にしたものです。一度目を通しておくことをオススメします。

## References

- VFM <https://vivliostyle.github.io/vfm/#/vfm>
- Vivliostyle CLI <https://github.com/vivliostyle/vivliostyle-cli#readme>
- Vivliostyle Themes <https://github.com/vivliostyle/themes#readme>
- Awesome Vivliostyle <https://github.com/vivliostyle/awesome-vivliostyle#readme>
- Vivliostyle (GitHub) <https://github.com/vivliostyle>
- Vivliostyle <https://vivliostyle.org>
