# Next.js App Router を利用してみて

## ① Server Component 　と　 Client Component

App Router では全てのコンポーネントが Server Component になりました。必要なところは Client Component に切り替えて実装します。

| 名前 | Server Component                     | Client Component                              |
| ---- | ------------------------------------ | --------------------------------------------- |
| 役割 | 先にサーバー側で計算するもの         | クライアント側でレンダリングが必要なもの      |
| 例   | データの取得・更新                   | インタラクションのある UI                     |
| 補足 | **App Router の Default はこっち！** | `use client` と書くと Client Component になる |

Server Component と Client Component を組み合わせて実装していく。

### ☝️ ポイント

- Server Component と Client Component に「分ける」ではなく、Server Component の中から Client Component を **「切り分ける」** 感覚が大切！

- Client Component から Server Component を呼び出す時は props or children で ServerComponent のレンダリング結果を渡す
  ```
  <ClientComponent submitButton={<ServerComponent />}>
  ```
  ref: [unsupported-pattern-importing-server-components-into-client-components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components)

### まずはこれをやってみよう！

#### 画面描画に必要なデータを取得する非同期コンポーネントを作成する

GET API を利用して、データを取得し画面に表示する `TaskList`コンポーネントを実装する場合を例に挙げます。

Pages Router の場合

```
- TaskList: タスク一覧コンポーネント
  - hooks.ts(container): 画面に描画するデータを受け取る担当
  - presentation.tsx: 受け取ったデータを画面にどう表示するかを担当
```

といったコンポーネント作成したとします。

参考: [Container/Presentational パターン再入門](https://zenn.dev/buyselltech/articles/9460c75b7cd8d1)

これを App Router で実装する場合は、hooks 部分を非同期コンポーネントに変更します。

App Router の場合

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

①`<form>`タグの `action` props を使う

② `<form>`タグの中の`<button>`, `<input type='submit'>` の `formAction` props を使う

③ 【Client Component で使う方法】`startTransision` を使う

### まずはこれをやってみよう！

#### フォームを Submit する時に Server Actions を使う

// 実装例紹介

#### ボタンをクリックした時に Server Actions を使う

// 実装例紹介

ref: [forms-and-mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)

## ③ Revalidate

App Router の中には独自のキャッシュ機構（一度取得したデータはキャッシュを参照すればいいよねという仕組み）があります。
↑ 複雑でまだ理解できていないので気になる方はご自身で調べてみてください 🙇‍♀️

データの更新を行った際はデータの再取得をしたいです。
そこで `revalidatePath` `revalidateTag` を使います。

② の Server Actions を使うと「タスクを追加した時にタスク一覧のデータを再取得する」といった実装ができます。

### まずはこれをやってみよう！

#### POST 処理が完了した時に revalidate 処理を追加する

ref: [revalidating-data](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#revalidating-data)
