function SaveTaskButton(props) {

    return(
        <button className="btn btn-success me-2" type="button" onClick={props.onSaveTask}>Save</button>
    );

}

export default SaveTaskButton;