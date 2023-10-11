import { useAddTask } from './hooks';
import { Presentation } from './presentation';

export type Task = {
  type: 'private' | 'work';
  name: string;
};

export const AddTask = () => {
  const props = useAddTask();

  return <Presentation {...props} />;
};
