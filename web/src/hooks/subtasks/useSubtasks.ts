import { Task } from "@/types/core/task";

export const useSubtasks = (task: Task, depth: number, maxDepth: number) => {
    const subtasksExist = task.subtasks && task.subtasks.length > 0;
    const completedSubtasks = task.subtasks?.filter(st => st.completed).length || 0;
    const totalSubtasks = task.subtasks?.length || 0;
    const canHaveSubtasks = depth < maxDepth - 1;
    const showExpandButton = subtasksExist && canHaveSubtasks;

    return { 
        subtasksExist, 
        completedSubtasks, 
        totalSubtasks, 
        canHaveSubtasks, 
        showExpandButton };
}