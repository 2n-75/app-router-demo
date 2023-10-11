import { useTasks } from './hooks';
import { Presentation } from './presentation';

export const TaskList = () => {
  const { list } = useTasks();

  return <Presentation list={list} />;
};
