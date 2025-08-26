'use client';

import { Task } from "@/types/core/task";
import { TaskContainer } from "./TaskContainer";
import { TaskContent } from "./TaskContent";
import { TaskStatusIcon } from "./TaskStatusIcon";
import { useSubtasks } from "@/hooks/subtasks/useSubtasks";
import { SubtaskList } from "../subtasks/SubtaskList";
import { useTaskExpansion } from "@/hooks/tasks/useTaskExpansion";
import { TaskActions } from "../actions/TaskActions";


interface TaskComponentProps {
  task: Task;
  depth?: number;
  maxDepth?: number;
  isSubtask?: boolean;
}

export const TaskComponent: React.FC<TaskComponentProps> = ({ 
  task, 
  depth = 0,
  maxDepth = 3,
  isSubtask = false
}) => {
  
  const { isExpanded, toggleExpand } = useTaskExpansion(depth, depth === 0);
  const { subtasksExist, completedSubtasks, totalSubtasks, canHaveSubtasks, showExpandButton } = useSubtasks(task, depth, maxDepth);

  return (
    <TaskContainer
    task={task}
    depth={depth}
    isSubtask={isSubtask}
    isExpanded={isExpanded}
    onToggleExpand={showExpandButton ? toggleExpand : undefined}
    >
      <div className="flex items-start space-x-4">
        <TaskStatusIcon completed={task.completed}/>
        <TaskContent task={task} depth={depth} isSubtask={isSubtask}/>
        <TaskActions
          showExpandButton={showExpandButton}
          subtasks={task.subtasks}
        />
      </div>

      {subtasksExist && canHaveSubtasks && task.subtasks && (
        <SubtaskList 
          subtasks={task.subtasks} 
          depth={depth} 
          maxDepth={maxDepth}
        />
      )}
    </TaskContainer>
  );
};