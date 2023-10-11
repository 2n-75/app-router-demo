import { useState } from 'react';
import { Props } from './presentation';
import { Task } from '.';
import { useRouter } from 'next/navigation';

const postTask = async (task: Task) => {
  const res = await fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    body: JSON.stringify(task),
  });

  return res;
};

export const useAddTask = (): Props => {
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (task: Task) => {
    setIsSubmitting(true);
    const result = await postTask(task);

    if (result.ok) {
      setSuccessMessage('タスクを追加しました');
    }
    setIsSubmitting(false);
  };

  return {
    successMessage,
    isSubmitting,
    onSubmit,
  };
};
