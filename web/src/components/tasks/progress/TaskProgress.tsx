interface TaskProgressProps {
  completed: number,
  total: number,
  percentage: number
}

export const TaskProgress: React.FC<TaskProgressProps> = ({ completed, total, percentage }) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-4">
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