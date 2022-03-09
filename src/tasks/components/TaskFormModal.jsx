import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle";

function TaskFormModal(props) {

    const tasksContext = useContext(TasksContext);

    const [newTask, setNewTask] = useState('');

    const [taskFormModal, setTaskFormModal] = useState(null);

    useEffect(() => {
        setTaskFormModal(new bootstrapBundle.Modal(document.getElementById(props.modalId)));
    }, [props.modalId]);

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        tasksContext.addTask({
            title: newTask,
            checked: false
        });
        taskFormModal.hide();
        resetForm();
    }

    const resetForm = () => {
        setNewTask('');
    }

    const openModal = () => {
        taskFormModal.show();
    }

    return(
        <>
            <button type="button" className="btn btn-primary ms-auto my-auto" onClick={openModal}>New Task</button>
            <div className="modal fade" id={props.modalId} tabIndex="-1" aria-labelledby={props.modalId + 'Label'} aria-hidden="true">
                <div className="modal-dialog">
                    <form className="modal-content" onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="taskTitleInput">Task title</label>
                            <input type="text" id="taskTitleInput" value={newTask} onChange={handleChange} className="form-control" />
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default TaskFormModal;