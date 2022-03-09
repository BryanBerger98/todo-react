import { useContext, useState } from "react";
import { TasksContext } from "../Context/TasksContext";
import DeleteTaskButton from "./DeleteTaskButton";

function Task(props) {

    const tasksContext = useContext(TasksContext);

    const [editMode, setEditMode] = useState(false);
    const [taskValue, setTaskValue] = useState('');

    const onEditTask = () => {
        setTaskValue(props.task.title);
        setEditMode(true);
    }

    const onSaveTask = () => {
        tasksContext.editTask({...props.task, title: taskValue}, props.index);
        setTaskValue('');
        setEditMode(false);
    }

    const onChangeTaskInputValue = (event) => {
        setTaskValue(event.target.value);
    }

    return (
        <div className="p-3 rounded-3 shadow mb-3 d-flex">
            {
                !editMode ?
                <label className="flex-fill my-auto d-flex me-2" htmlFor={'flexCheckDefault' + props.index}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id={'flexCheckDefault' + props.index} onChange={() => props.onCheckTask(props.index)} checked={props.task.checked} />
                    </div>
                    <p className="m-0 ms-1">{props.task.title}</p>    
                </label>
                : <div className="form-group flex-fill my-auto me-2">
                    <input type="text" className="form-control" value={taskValue} onChange={onChangeTaskInputValue} />
                </div>
            }
            {!editMode ? 
                <button className="btn btn-primary me-2" type="button" onClick={onEditTask}>Edit</button>    
            : <button className="btn btn-success me-2" type="button" onClick={onSaveTask}>Save</button>}
            <DeleteTaskButton taskIndex={props.index} />
        </div>
    );
  }
  
  export default Task;
  