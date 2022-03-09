import React, { useState } from 'react';

const TasksContext = React.createContext(null);

export { TasksContext };

const TasksContextProvider = props => {

    const [tasks, setTasks] = useState([
        {
            title: 'Task 1',
            checked: false,
        },
        {
            title: 'Task 2',
            checked: false
        }
    ]);

    const getTasks = () => {
        return tasks;
    }

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const toggleCheckTask = (taskIndex) => {
        const tasksArr = [...tasks];
        tasksArr[taskIndex].checked = tasksArr[taskIndex].checked ? false : true;
        setTasks(tasksArr);
    }

    const deleteTask = taskIndex => {
        const tasksArr = [...tasks];
        tasksArr.splice(taskIndex, 1);
        setTasks(tasksArr);
    }

    const editTask = (task, taskIndex) => {
        const tasksArr = [...tasks];
        tasksArr[taskIndex] = task;
        setTasks(tasksArr);
    }

    return(
        <TasksContext.Provider value={{
            getTasks,
            addTask,
            toggleCheckTask,
            deleteTask,
            editTask
        }}>
            {props.children}
        </TasksContext.Provider>
    )

}

export default TasksContextProvider;