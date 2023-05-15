module.exports = {
  title: 'なんでもいいよ!!の合同本',
  author: 'wat2022 <kushida98@gmail.com>',
  language: 'ja',
  size: 'JIS-B5',
  theme: './theme',
  entryContext: './articles',
  entry: [
    {
      // 扉ページ
      // path: "index.md",
      path: "index.html", // htmlファイルを使用する場合
      title: "目次"
    },

    "howToOpeningEvent/howToOpeningEvent.md",
    "howToIosDevelop/01.md",
    "securityIntelligenceExaminer/securityIntelligenceExaminer.md",
    "Muranaka/01.md",

    // あとがき、奥付
    "colophon.md"
  ],
  output: [
    './dist/output.pdf',
    {
      path: './dist/webpub',
      format: 'webpub',
    },
  ],
  workspaceDir: '.vivliostyle',
}
