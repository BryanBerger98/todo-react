function Task(props) {
    return (
        <div className="p-3 rounded-3 shadow mb-3 d-flex">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id={'flexCheckDefault' + props.index} onChange={() => props.onCheckTask(props.index)} checked={props.task.checked} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                </label>
            </div>
            <p className="m-0 ms-1">{props.task.title}</p>
        </div>
    );
  }
  
  export default Task;
  