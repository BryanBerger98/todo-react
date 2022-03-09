import DeleteTaskButton from "./DeleteTaskButton";

function Task(props) {
    return (
        <div className="p-3 rounded-3 shadow mb-3 d-flex">
            <label className="flex-fill my-auto d-flex" htmlFor={'flexCheckDefault' + props.index}>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id={'flexCheckDefault' + props.index} onChange={() => props.onCheckTask(props.index)} checked={props.task.checked} />
                </div>
                <p className="m-0 ms-1">{props.task.title}</p>    
            </label>
            <DeleteTaskButton taskIndex={props.index} />
        </div>
    );
  }
  
  export default Task;
  