import { useState, useEffect } from 'react';
import { Props } from './presentation';

export const useTasks = (): Props => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data.tasks));
  }, []);

  return {
    list: tasks,
  };
};
