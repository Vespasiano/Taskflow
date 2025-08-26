import { Task } from "@/types/task";

interface CompletedTaskCardProps {
    task: Task;
}

export default function CompletedTaskCard ( { task }: CompletedTaskCardProps) {
    return (            
    <div className="bg-accent-warm/70 border border-primary-medium border-opacity-30 rounded-2xl p-6 mb-16 backdrop-blur text-center w-full max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-primary-dark text-xl">⭐</span>
            <span className="text-sm text-primary-dark opacity-80 uppercase tracking-wide ">Just Completed</span>
        </div>
        <div className="text-xl font-semibold leading-relaxed text-primary-dark"> {task.title}</div>
    </div>
    );
}