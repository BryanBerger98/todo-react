import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle";

function TaskFormModal(props) {

    const tasksContext = useContext(TasksContext);

    const [taskForm, setTaskForm] = useState({
        title: '',
        tags: ''
    });

    const [tags, setTags] = useState([]);

    const [taskFormModal, setTaskFormModal] = useState(null);

    useEffect(() => {
        setTaskFormModal(new bootstrapBundle.Modal(document.getElementById(props.modalId)));
    }, [props.modalId]);

    const handleChange = (event) => {
        const newTaskForm = {...taskForm};
        const inputName = event.target.name;
        let inputValue = event.target.value;
        if (inputName === 'tags') {
            const tagsObj = formatTags(inputValue);
            setTags(tagsObj.array);
            inputValue = tagsObj.string;
        }
        newTaskForm[inputName] = inputValue;
        setTaskForm(newTaskForm);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        tasksContext.addTask({
            title: taskForm.title,
            checked: false,
            tags
        });
        taskFormModal.hide();
        resetForm();
    }

    const formatTags = (tagsString) => {
        const tagsArr = tagsString.split(' ');
        const hashTagTagsArr = tagsArr
        .map(el => {
            const removeHashtag = el.replace('#', '')
            if (removeHashtag !== '') {
                return `#${removeHashtag}`;
            } else {
                return '';
            }
        });
        const hashTagTagsString = hashTagTagsArr.join(' ');
        return {
            string: hashTagTagsString,
            array: hashTagTagsArr
        };
    }

    const resetForm = () => {
        setTaskForm({
            title: '',
            tags: ''
        });
        setTags([]);
    }

    const openModal = () => {
        taskFormModal.show();
    }

    return(
        <>
            <button type="button" className="btn btn-primary ms-auto my-auto" onClick={openModal}>New Task</button>
            <div className="modal fade" id={props.modalId} tabIndex="-1" aria-labelledby={props.modalId + 'Label'} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form className="modal-content" onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="form-group mb-3">
                            <label htmlFor="taskTitleInput">Task title</label>
                            <input type="text" id="taskTitleInput" value={taskForm.title} onChange={handleChange} name="title" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskTagsInput">Tags</label>
                            <input type="text" id="taskTagsInput" value={taskForm.tags} onChange={handleChange} name="tags" className="form-control" />
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