export type TasksResponse = {
  tasks: {
    type: 'private' | 'work';
    name: string;
  }[];
};

export async function GET(request: Request) {
  const res: TasksResponse = {
    tasks: [
      {
        type: 'private',
        name: 'ゴミ捨て',
      },
      {
        type: 'work',
        name: 'PCの交換',
      },
      {
        type: 'private',
        name: '歯医者に行く',
      },
    ],
  };
  return Response.json(res);
}

export async function POST(request: Request) {
  // 登録が成功したと仮定した場合のレスポンスを返却する
  return Response.json({ message: 'success' });
}
