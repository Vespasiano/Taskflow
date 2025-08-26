import { useProgressCalculation } from "@/hooks/tasks/useTaskProgress";
import { TaskProgress } from "../progress/TaskProgress";
import { Task } from "@/types/core/task";


interface TaskActionsProps {
    showExpandButton?: boolean;
    subtasks?: Task[];
}

export const TaskActions: React.FC<TaskActionsProps> = ({
    showExpandButton,
    subtasks = []
}) => {
    const { completed, total, percentage } = useProgressCalculation(subtasks);
    if (!showExpandButton) { return null; }
    return (
        <TaskProgress
            completed={completed}
            total={total}
            percentage={percentage}
        />
    );
};