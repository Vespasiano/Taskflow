import { Task } from '@/types/task';
import HeaderView from './HeaderView';
import { TaskComponent } from '../tasks/TaskComponent';
import { TaskProgress } from '../tasks/TaskProgress';

interface TaskSelectionListProps {
    tasks: Task[];
}

export default function TaskSelectionList( { tasks }: TaskSelectionListProps) {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    return (
        <div>
            <HeaderView activePage="tasks" />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <TaskProgress completed={completedTasks} total={totalTasks} />
                {tasks.map((task) => (
                    <TaskComponent key={task.id} task={task} isSubtask={false}/>
                ))}
            </div>
        </div>
    );
}