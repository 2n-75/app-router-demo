'use client';
import * as React from 'react';
import { addTask } from './action';
import { useState } from 'react';
import { Presentation } from './presentation';
export type Task = {
  type: 'private' | 'work';
  name: string;
};

export const AddTask = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitAction = async (data: FormData) => {
    setIsSubmitting(true);
    const result = await addTask(data);
    if (result.message === 'success') {
      setSuccessMessage('タスクを追加しました');
    }
    setIsSubmitting(false);
  };

  return (
    <Presentation
      submitAction={submitAction}
      successMessage={successMessage}
      isSubmitting={isSubmitting}
    />
  );
};
