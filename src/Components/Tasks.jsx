import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../Context/TasksContext";
import Task from "./Task";

function Tasks(props) {

    const tasksContext = useContext(TasksContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(tasksContext.getTasks());
    }, [tasksContext]);

    const onCheckTask = (index) => {
        tasksContext.toggleCheckTask(index);
    }

    return (
        <div>
            {tasks.map((task, index) => <Task key={index} task={task} index={index} onCheckTask={onCheckTask} />)}
        </div>
    );
  }
  
  export default Tasks;
  