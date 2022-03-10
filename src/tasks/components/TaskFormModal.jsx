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
        setTaskFormModal(new bootstrapBundle.Modal(document.getElementById(props.task ? props.task.id + props.modalId : props.modalId)));
        console.log(props.task);
        if (props.task) {
            setTaskForm({
                title: props.task.title,
                tags: props.task.tags.join(' ')
            });
            setTags(props.task.tags);
        }
    }, [props.task, props.modalId]);

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
        if (props.task) {
            tasksContext.editTask({...props.task, title: taskForm.title, tags}, props.task.id);
        } else {
            tasksContext.addTask({
                title: taskForm.title,
                checked: false,
                tags
            });
        }
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
            <button type="button" className={props.button.class} onClick={openModal}>{props.button.name}</button>
            <div className="modal fade" id={props.task ? props.task.id + props.modalId : props.modalId} tabIndex="-1" aria-labelledby={props.task ? props.task.id + props.modalId + 'Label' : props.modalId + 'Label'} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form className="modal-content" onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.task ? props.task.id + props.modalId + 'Title' : props.modalId + 'Title'}>New task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="form-group mb-3">
                            <label htmlFor={props.task ? props.task.id + props.modalId + 'taskTitleInput' : props.modalId + 'taskTitleInput'}>Task title</label>
                            <input type="text" id={props.task ? props.task.id + props.modalId + 'taskTitleInput' : props.modalId + 'taskTitleInput'} value={taskForm.title} onChange={handleChange} name="title" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor={props.task ? props.task.id + props.modalId + 'taskTagsInput' : props.modalId + 'taskTagsInput'}>Tags</label>
                            <input type="text" id={props.task ? props.task.id + props.taskTagsInput + 'taskTitleInput' : props.modalId + 'taskTagsInput'} value={taskForm.tags} onChange={handleChange} name="tags" className="form-control" />
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