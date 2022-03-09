import { useContext, useState } from "react";
import { TasksContext } from "../Context/TasksContext";

function NewTaskForm() {

    const tasksContext = useContext(TasksContext);

    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        tasksContext.addTask({
            title: newTask,
            checked: false
        });
        resetForm();
    }

    const resetForm = () => {
        setNewTask('');
    }

    return (
        <form onSubmit={handleSubmit} id="newTaskForm" className="d-flex mb-5">
            <div className="form-group flex-fill">
                <label htmlFor="newTaskInput">Add task</label>
                <input type="text" id="newTaskInput" value={newTask} onChange={handleChange} className="form-control" />
            </div>
            <button className="btn btn-primary ms-2 mt-auto" type="submit">Save</button>
        </form>
    );
  }
  
  export default NewTaskForm;
  