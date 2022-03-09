function EditTaskButton(props) {

    return(
        <button className="btn btn-primary me-2" type="button" onClick={props.onEditTask}>Edit</button>
    );

}

export default EditTaskButton;