import { Task } from '@/types/core/task';
import HeaderView from './HeaderView';
import { TaskComponent } from '../tasks/core/TaskComponent';
import { TaskProgress } from '../tasks/progress/TaskProgress';
import { useProgressCalculation } from '@/hooks/tasks/useTaskProgress';

interface TaskSelectionListProps {
    tasks: Task[];
}

export default function TaskSelectionList( { tasks }: TaskSelectionListProps) {
    const { completed, total, percentage } = useProgressCalculation(tasks);
    return (
        <div>
            <HeaderView activePage="tasks" />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-4 text-2xl font-light text-primary-dark mb-2">All Tasks</div>
                <TaskProgress completed={completed} total={total} percentage={percentage} />
                {tasks.map((task) => (
                    <TaskComponent key={task.id} task={task} isSubtask={false}/>
                ))}
            </div>
        </div>
    );
}