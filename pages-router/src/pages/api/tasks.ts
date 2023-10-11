// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type TasksResponse = {
  tasks: {
    type: 'private' | 'work';
    name: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TasksResponse>
) {
  res.status(200).json({
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
  });
}
