import TaskSelectionList from "@/components/views/TaskSelectionList";
import FocusView from "@/components/views/FocusView";
import { mockTasks } from "@/data/mockTasks"

// export const SimpleComponent = ({ id }: { id: number }) => {
//   return <div>Task {id}</div>;
// };



export default function Home() {
  const mainTask = mockTasks[0];
  const lastTask = mainTask.subtasks?.find(subtask => subtask.completed);
  const currentTask = mainTask.subtasks?.find(subtask => !subtask.completed);

  const fallbackTask = {
    id: 0,
    title: 'No task available',
    completed: false,
  };

  return (
    <div lang="en">
      <meta charSet="UTF-8" name="viewport" content="width=device-width, initial scale=1.0"></meta>
      <div className="min-h-screen bg-background text-primary-dark overflow-hidden relative font-sans p-8">
        {/* <FocusView
            lastTask={lastTask || fallbackTask}
            currentTask={currentTask || fallbackTask}>
        </FocusView> */}

        {/* <SimpleComponent key="1" id={1} />
        <SimpleComponent key="2" id={2} />
        <SimpleComponent key="3" id={3} /> */}

        <TaskSelectionList tasks={mockTasks}/>
      </div>
    </div>


  );
}