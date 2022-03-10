import React, { useState } from 'react';

const TasksContext = React.createContext(null);

export { TasksContext };

const TasksContextProvider = props => {

    const [tasks, setTasks] = useState([
        {
            title: 'Task 1',
            checked: false,
            tags: [
                '#home',
                "#cook"
            ]
        },
        {
            title: 'Task 2',
            checked: false,
            tags: [
                '#job',
                "#dev"
            ]
        },
        {
            title: 'Task 3',
            checked: false,
            tags: [
                '#home',
                "#dev"
            ]
        }
    ]);

    const getTasks = () => {
        return tasks;
    }

    const getTags = () => {
        const tags = [].concat(...tasks.map(el => el.tags));
        return [...new Set(tags)];
    }

    const getTasksByTag = (tag) => {
        if (tag === '*') {
            return tasks;
        }
        const filteredTasks = tasks.filter(el => el.tags.includes(tag));
        return filteredTasks;
    }

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const toggleCheckTask = (taskToCheck) => {
        const tasksArr = [...tasks];
        const taskIndex = tasksArr.findIndex(el => el === taskToCheck);
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
            editTask,
            getTags,
            getTasksByTag
        }}>
            {props.children}
        </TasksContext.Provider>
    )

}

export default TasksContextProvider;