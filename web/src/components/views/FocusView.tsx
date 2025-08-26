import { Task } from "@/types/task";
import CompletedTaskCard from "../tasks/CompletedTaskCard";
import CurrentTaskCard from "../tasks/CurrentTaskCard";
import HeaderView from "./HeaderView";

interface FocusViewProps {
    lastTask?: Task;
    currentTask?: Task;
}

export default function FocusView( {lastTask, currentTask}: FocusViewProps) {

    return (
    <div>
        <HeaderView activePage="focus" />
        <div className="container relative z-10 flex flex-col justify-center items-center min-h-screen max-w-6xl mx-auto">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-xl font-light opacity-80 mb-2">Focus Mode</div>
                <div className="text-5xl font-extralight tracking-wider text-primary-dark">25:00</div>
            </div>
            {lastTask && <CompletedTaskCard task={lastTask}/>}
            {currentTask && <CurrentTaskCard task={currentTask}/>}
        </div>
    </div>
    )
}