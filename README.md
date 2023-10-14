# App Router と Pages Router の違い

app router と pages router の違いを理解するために同じ画面を 2つの方法で作成しました。

【注意】
DB部分は未実装のため実際のデータの更新はできません。
ブラウザからfetchリクエストするところまでのイメージを掴むためのコードです。

## 実装されている画面

- タスク一覧画面 [http://localhost:3000](http://localhost:3000)
- タスク登録画面 [http://localhost:3000/add](http://localhost:3000)

## 動作確認

### Pages Router 実装を確認する

```
cd pages-router

npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いてください

### App Router 実装を確認する

```
cd app-router

npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いてください
