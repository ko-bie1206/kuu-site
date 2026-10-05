# くー / Kuu~ ポートフォリオサイト

HTML・CSS・JavaScriptだけで動く静的サイトです。ビルドは不要です。

## 内容を更新するとき

`script.js` の先頭にある3か所を書き換えるだけで更新できます。

| 項目 | 書き換える内容 |
|---|---|
| `LINKS` | X / YouTube / TikTok / メール / フォームのURL（空 `""` にするとボタンが非表示になります） |
| `WORKS` | 制作実績。画像は `index.html` と同じ階層に置き、`img: "work01.jpg"` のように指定します |
| `PRICES` | 料金カード（**現在は仮の金額です**） |

文章（コンセプト・FAQ・依頼の流れなど）は `index.html` を直接編集してください。

## 公開方法（どれも無料）

- **GitHub Pages**：リポジトリに push し、Settings → Pages で公開
  - 画像などのファイルはすべて `index.html` と同じ階層に置いてください（GitHubのブラウザ画面ではフォルダをアップロードしにくいため）
- **Netlify / Cloudflare Pages**：このフォルダをドラッグ＆ドロップするだけで公開

## ローカルで確認

```bash
python -m http.server 5178 --directory .
```
