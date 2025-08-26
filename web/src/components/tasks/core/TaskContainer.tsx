import { Task } from "@/types/core/task";

interface TaskContainerProps {
  task: Task;
  depth: number;
  isSubtask?: boolean;
  children: React.ReactNode;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const TaskContainer: React.FC<TaskContainerProps> = ({
  task,
  depth,
  isSubtask,
  children,
  isExpanded = false,
  onToggleExpand
}) => {
  const depthMargin = `ml-${Math.min(6 + depth * 2, 12)}`;
  
  return (
    <div className={isSubtask ? depthMargin : ''}>
      <div className={`
        rounded-xl p-4 mb-3 transition-all duration-150
        ${isSubtask 
          ? 'bg-white/60 border-l-8 border-action-green/30 pl-3' 
          : 'bg-white/80 border-4 border-primary-medium/20 shadow-xs'
        }
        ${task.completed ? 'opacity-60 border-primary-medium/10' : 'border-transparent'}
        ${!task.completed ? 'hover:border-action-green/30' : ''}
      `}>
        {children}
      </div>
    </div>
  );
};