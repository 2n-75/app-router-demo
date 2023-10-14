'use server';

import { revalidateTag } from "next/cache";

export const deleteTask = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: 'DELETE',
  });

  revalidateTag("getTasks")

  return await res.json();
};
