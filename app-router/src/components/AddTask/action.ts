'use server';

import { Task } from '.';

export const addTask = async (data: FormData) => {
  console.log({ data: Object.entries(data.entries()), key: data.keys() });

  const request: Task = {
    name: data.get('name') as Task['name'],
    type: data.get('type') as Task['type'],
  };
  console.log({ request });
  const res = await fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return await res.json();
};
