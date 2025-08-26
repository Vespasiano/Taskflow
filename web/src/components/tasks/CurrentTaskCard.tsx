import { Task } from "@/types/task";

interface CurrentTaskCardProps {
    task: Task;
}

export default function CurrentTaskCard ( { task }: CurrentTaskCardProps) {
    return (            
            <div className="bg-accent-warm border-2 border-primary-dark border-opacity-40 rounded-3xl p-12 text-center w-full max-w-3xl shadow-xl">
                <div className="text-base opacity-80 uppercase tracking-wide mb-4 text-primary-dark">Current Focus</div>
                <div className="text-5xl font-light leading-relaxed mb-6 text-primary-dark">{task.title}</div>
            </div>
    );
}