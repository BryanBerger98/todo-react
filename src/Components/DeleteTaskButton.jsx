import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";

function DeleteTaskButton(props) {

    const tasksContext = useContext(TasksContext);

    const handleClick = () => {
        tasksContext.deleteTask(props.taskIndex);
    }

    return (
        <button className="btn btn-danger" type="button" onClick={handleClick}>
            Delete
        </button>
    );
  }
  
  export default DeleteTaskButton;
  