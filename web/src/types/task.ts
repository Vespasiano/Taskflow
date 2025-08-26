export interface Task {
    id: number;
    title: string;
    description ?: string;
    subtasks ?: Task[];
    completed: boolean;
}