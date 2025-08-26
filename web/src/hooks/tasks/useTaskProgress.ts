import { Task } from '@/types/core/task';

export const useProgressCalculation = (tasks: Task[] = []) => {
  const completed = tasks.filter(task => task.completed).length;
  const total = tasks.length;
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  
  return { completed, total, percentage };
};