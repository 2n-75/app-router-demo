# Next.js App Routerを利用してみて

## App Router とは
- Webアプリケーションのパフォーマンスをより最適化するための機能を持ったモード （みたいなもの）
- 今後, Nextjsの開発はApp Routerを主流になっていくらしい

#### 勉強しておいて損はない！

## 今日話すこと
🙅‍♀️ App Routerを利用した最適なアプリケーション設計

🙆‍♀️ App Routerを使った実装で知っておいた方が良いこと

***

## ① Server Component　と　Client Component

App Routerでは全てのコンポーネントがServer Componentになりました。必要なところはClient Componentに切り替えて実装します。

| 名前 | Server Component | Client Component |
| ---- | ---- | ---- |
|役割| 先にサーバー側で計算するもの|クライアント側でレンダリングが必要なもの|
|例|データの取得・更新|インタラクションのあるUI|
|補足|**App RouterのDefaultはこっち！** | `use client` と書くとClient Componentになる|

Server ComponentとClient Componentを組み合わせて実装していく。

### ☝️ポイント
- Server ComponentとClient Componentに「分ける」ではなく、Server Componentの中からClient Componentを **「切り分ける」** 感覚が大切！

- Client ComponentからServer Componentを呼び出す時は props or childrenでServerComponentのレンダリング結果を渡す
  ```
  <ClientComponent submitButton={<ServerComponent />}>
  ```
  ref: [unsupported-pattern-importing-server-components-into-client-components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components)


### まずはこれをやってみよう！
#### 画面描画に必要なデータを取得する非同期コンポーネントを作成する

GET APIを利用して、データを取得し画面に表示する `TaskList`コンポーネントを実装する場合を例に挙げます。

Pages Routerの場合
```
- TaskList: タスク一覧コンポーネント
  - hooks.ts(container): 画面に描画するデータを受け取る担当
  - presentation.tsx: 受け取ったデータを画面にどう表示するかを担当
```
といったコンポーネント作成したとします。

参考: [Container/Presentationalパターン再入門](https://zenn.dev/buyselltech/articles/9460c75b7cd8d1)

これをApp Routerで実装する場合は、hooks部分を非同期コンポーネントに変更します。

App Routerの場合
```
- TaskList: タスク一覧コンポーネント
  - index.tsx(server component): 画面に描画するデータを受け取る担当 ← 非同期コンポーネントにする
  - presentation.tsx(client component): 受け取ったデータを画面にどう表示するかを担当 ←そのまま
```

## ② Server Actions
フォームの送信やボタンのクリックなどのユーザーイベントによってサーバーサイドで実行する処理を呼び出せるもの

例:
- フォームを送信した時に POST API を呼び出す
- ボタンをクリックしてデータを削除する

### 呼び出し方
①`<form>`タグの `action` propsを使う
② `<form>`タグの中の`<button>`, `<input type='submit'>` の `formAction` props を使う
③ 【Client Componentで使う方法】`startTransision` を使う

### まずはこれをやってみよう！
#### フォームをSubmitする時にServer Actionsを使う

// 実装例紹介
#### ボタンをクリックした時にServer Actionsを使う

// 実装例紹介

ref: [forms-and-mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)
## ③ Revalidate
App Routerの中には独自のキャッシュ機構（一度取得したデータはキャッシュを参照すればいいよねという仕組み）があります。
↑ 複雑でまだ理解できていないので気になる方はご自身で調べてみてください🙇‍♀️

データの更新を行った際はデータの再取得をしたいです。
そこで `revalidatePath` `revalidateTag` を使います。

②のServer Actionsを使うと「タスクを追加した時にタスク一覧のデータを再取得する」といった実装ができます。

### まずはこれをやってみよう！

#### POST処理が完了した時に revalidate処理を追加する
ref: [revalidating-data](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#revalidating-data)
