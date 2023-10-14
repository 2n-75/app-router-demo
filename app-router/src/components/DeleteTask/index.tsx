'use client';
import { deleteTask } from './action';
import { useTransition } from 'react';
import { Button } from '@mui/material';

type Props = { id: number };
export const DeleteTask = ({ id }: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="submit"
      variant="outlined"
      disabled={isPending}
      onClick={() => startTransition(() => deleteTask(id))}
      color="error"
    >
      削除
    </Button>
  );
};
