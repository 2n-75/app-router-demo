import { TasksResponse } from '@/app/api/tasks/route';
import { Presentation } from './presentation';

const getTasks = async () => {
  const res = await fetch('http://localhost:3000/api/tasks', {
    next: {
      tags: ['getTasks'],
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log('failed to fetch');
  }
  const data: TasksResponse = await res.json();
  return data;
};

export const TaskList = async () => {
  const res = await getTasks();

  return <Presentation list={res.tasks} />;
};
