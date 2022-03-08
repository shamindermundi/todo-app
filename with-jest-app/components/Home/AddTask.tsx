import React, { useState } from "react";

import styles from "./home.module.css";

/**
 * Component to add new task
 */

interface Props {
    setTaskList: Function;
}

const AddTask = ({ setTaskList }: Props) => {
    const [newTask, setNewTask] = useState("");

    // Function to add task in localstorage
    const handleAdd = (event: any) => {
        event.preventDefault();
        if (newTask.trim() === "") return;

        let taskList: any = localStorage?.getItem("taskList");
        let newList;
        if (taskList) {
            taskList = JSON.parse(taskList);
            newList = [...taskList, newTask];
        } else {
            newList = [newTask];
        }

        setTaskList(newList);
        localStorage.setItem("taskList", JSON.stringify(newList));
        setNewTask("");
    };

    return (
        <form className={styles.addTask} onSubmit={(e) => handleAdd(e)}>
            <input
                data-testid="input"
                placeholder="Add your task"
                className={styles.input}
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button data-testid="add-button" type="submit" className={styles.addButton}>
                Add
            </button>
        </form>
    );
};

export default AddTask;
