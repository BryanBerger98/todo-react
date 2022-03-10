import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import DeleteTaskButton from "./Buttons/DeleteTaskButton";
import EditTaskButton from "./Buttons/EditTaskButton";
import SaveTaskButton from "./Buttons/SaveTaskButton";

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
                <div className="d-flex flex-column flex-fill">
                    <label className="flex-fill my-auto d-flex me-2" htmlFor={'flexCheckDefault' + props.index}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={'flexCheckDefault' + props.index} onChange={() => props.onCheckTask(props.task)} checked={props.task.checked} />
                        </div>
                        <p className="m-0 ms-1">{props.task.title}</p>    
                    </label>
                    <div className="d-flex">
                        {props.task.tags.map((tag, i) => (
                            <span className="badge bg-secondary me-2" key={props.task.title + '-' + tag + '-' + i}>{tag}</span>
                        ))}
                    </div>    
                </div>
                : <div className="form-group flex-fill my-auto me-2">
                    <input type="text" className="form-control" value={taskValue} onChange={onChangeTaskInputValue} />
                </div>
            }
            {!editMode ? <EditTaskButton onEditTask={onEditTask} /> : <SaveTaskButton onSaveTask={onSaveTask} />}  
            <DeleteTaskButton taskIndex={props.index} />
        </div>
    );
  }
  
  export default Task;
  