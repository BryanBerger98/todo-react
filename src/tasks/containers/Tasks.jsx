import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import Task from "../components/Task";
import Tags from "../components/Tags";

function Tasks(props) {

    const tasksContext = useContext(TasksContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(tasksContext.getTasks());
    }, [tasksContext]);

    const onCheckTask = (index) => {
        tasksContext.toggleCheckTask(index);
    }

    const onFilterTasksByTag = (tag) => {
        setTasks(tasksContext.getTasksByTag(tag));
    }

    return (
        <div>
            <Tags onFilterTasksByTag={onFilterTasksByTag} />
            {tasks.map((task, index) => <Task key={index} task={task} index={index} onCheckTask={onCheckTask} />)}
        </div>
    );
  }
  
  export default Tasks;
  