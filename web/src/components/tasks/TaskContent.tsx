import { Task } from "@/types/task";

interface TaskContentProps {
    task: Task;
    isSubtask?: boolean;
}

export const TaskContent: React.FC<TaskContentProps> = ({ task, isSubtask = false }) => {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center space-x-2">
        <h3 className={`
          font-semibold leading-tight
          ${isSubtask ? 'text-sm' : 'text-lg'}
          ${task.completed 
            ? 'text-primary-medium line-through decoration-2' 
            : 'text-primary-dark'}
        `}>
          {task.title}
        </h3>
      </div>
      
      {task.description && (
        <p className="text-sm text-primary-medium mt-1">
          {task.description}
        </p>
      )}
    </div>
  );
};