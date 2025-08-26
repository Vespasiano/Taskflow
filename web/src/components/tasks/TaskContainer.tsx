import { Task } from "@/types/task";

interface TaskContainerProps {
  isSubtask?: boolean;
  task: Task;
  children: React.ReactNode;
}

export const TaskContainer: React.FC<TaskContainerProps> = ({ 
  isSubtask = false, 
  task, 
  children 
}) => {
  return (
    <div className={isSubtask ? 'ml-6' : ''}>
      <div className={`
        rounded-xl p-4 mb-3 transition-all duration-150 border-transparent
        ${isSubtask 
          ? 'bg-white/60 border-l-8 border-action-green/30 pl-3' 
          : 'bg-white/80 border-4 border-primary-medium/20 shadow-xs hover:shadow-md'
        }
        ${task.completed 
          ? 'opacity-60 border-primary-medium/10' 
          : 'hover:border-action-green/30'}
      `}>
        {children}
      </div>
    </div>
  );
};