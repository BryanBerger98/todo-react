import DeleteTaskButton from "./Buttons/DeleteTaskButton";
import TaskFormModal from "./TaskFormModal";

function Task(props) {

    return (
        <div className="p-3 rounded-3 shadow mb-3 d-flex">
            <div className="d-flex flex-column flex-fill">
                <label className="flex-fill my-auto d-flex me-2" htmlFor={'flexCheckDefault' + props.index}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id={'flexCheckDefault' + props.index} onChange={() => props.onCheckTask(props.task.id)} checked={props.task.checked} />
                    </div>
                    <p className="m-0 ms-1">{props.task.title}</p>    
                </label>
                <div className="d-flex">
                    {props.task.tags.map((tag, i) => (
                        <span className="badge bg-secondary me-2" key={props.task.title + '-' + tag + '-' + i}>{tag}</span>
                    ))}
                </div>    
            </div>
            <TaskFormModal task={props.task} modalId="taskFormModal" button={{name: 'Edit', class: 'btn btn-primary me-2'}} />
            <DeleteTaskButton taskIndex={props.index} />
        </div>
    );
  }
  
  export default Task;
  