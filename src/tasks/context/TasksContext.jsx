import React, { useState } from 'react';

const TasksContext = React.createContext(null);

export { TasksContext };

const TasksContextProvider = props => {

    const [tasks, setTasks] = useState([
        {
            id: 1646906250424,
            title: 'Task 1',
            checked: false,
            tags: [
                '#home',
                "#cook"
            ]
        },
        {
            id: 1646906250425,
            title: 'Task 2',
            checked: false,
            tags: [
                '#job',
                "#dev"
            ]
        },
        {
            id: 1646906250426,
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

    const toggleCheckTask = (taskIdToCheck) => {
        const tasksArr = [...tasks];
        const taskIndex = tasksArr.findIndex(el => el.id === taskIdToCheck);
        tasksArr[taskIndex].checked = tasksArr[taskIndex].checked ? false : true;
        setTasks(tasksArr);
    }

    const deleteTask = taskIndex => {
        const tasksArr = [...tasks];
        tasksArr.splice(taskIndex, 1);
        setTasks(tasksArr);
    }

    const editTask = (task, taskId) => {
        const tasksArr = [...tasks];
        const tasksToUpdateIndex = tasksArr.findIndex(el => el.id === taskId);
        tasksArr[tasksToUpdateIndex] = task;
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