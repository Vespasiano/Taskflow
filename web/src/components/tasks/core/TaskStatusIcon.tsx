interface TaskStatusIconProps {
    completed: boolean;
}

export const TaskStatusIcon: React.FC<TaskStatusIconProps> = ({ completed }) => {
    return (
        <div className={`mt-1${completed ? 'text-primary-dark' : 'text-primary-medium'}`}>
            {completed ? '✓' : '○'}
        </div>
    );
};