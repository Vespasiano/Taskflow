import { Task } from "@/types/task";
import { TaskContainer } from "./TaskContainer";
import { TaskContent } from "./TaskContent";
import { SubtaskProgress } from "./SubtaskProgress";

interface TaskComponentProps {
  task: Task;
  isSubtask?: boolean;
}

export const TaskComponent: React.FC<TaskComponentProps> = ({ 
  task, 
  isSubtask = false 
}) => {
  const subtasksExist = task.subtasks && task.subtasks.length > 0;
  const completedSubtasks = task.subtasks?.filter(st => st.completed).length || 0;
  const totalSubtasks = task.subtasks?.length || 0;

  return (
    <TaskContainer isSubtask={isSubtask} task={task}>
      <div className="flex items-start space-x-4">
        <div className={`
          mt-1
          ${task.completed ? 'text-primary-dark' : 'text-primary-medium'}
        `}>
          {task.completed ? '✓' : '○'}
        </div>

        <TaskContent task={task} isSubtask={isSubtask} />
        
        {subtasksExist && !isSubtask && (
          <SubtaskProgress completed={completedSubtasks} total={totalSubtasks} />
        )}
      </div>

      {subtasksExist && !isSubtask && task.subtasks && (
        <div className="mt-4">
          {task.subtasks.map(subtask => (
            <TaskComponent
              key={subtask.id}
              task={subtask}
              isSubtask={true}
            />
          ))}
        </div>
      )}
    </TaskContainer>
  );
};