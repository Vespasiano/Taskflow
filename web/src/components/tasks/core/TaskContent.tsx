import { Task } from "@/types/core/task";

interface TaskContentProps {
    task: Task;
    depth: number;
    isSubtask?: boolean;
}

export const TaskContent: React.FC<TaskContentProps> = ({ task, depth, isSubtask}) => {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center space-x-2">
        <div className={`
          font-semibold leading-tight
          ${isSubtask ? 'text-sm' : 'text-lg'}
          ${task.completed 
            ? 'text-primary-medium line-through decoration-2' 
            : 'text-primary-dark'}
        `}>
          {task.title}
        </div>
      </div>

      {task.description && (
        <p className="text-sm text-primary-medium mt-1"> {task.description} </p>
      )}
    </div>
  );
};