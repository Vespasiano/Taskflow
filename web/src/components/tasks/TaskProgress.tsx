interface TaskProgressProps {
  completed: number;
  total: number;
}

export const TaskProgress: React.FC<TaskProgressProps> = ({ completed, total }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  
  return (
    <div className="mb-8">
      <div className="text-center mb-4">
        <div className="text-2xl font-light text-primary-dark mb-2">All Tasks</div>
        <div className="text-primary-medium text-sm">{completed} of {total} completed</div>
      </div>

      <div className="w-full bg-accent-warm/50 rounded-full h-2">
        <div 
          className="bg-action-green h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}>       
        </div>
      </div>
    </div>
  );
};