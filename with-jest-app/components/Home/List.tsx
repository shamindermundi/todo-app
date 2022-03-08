import React from "react";

import styles from "./home.module.css";

/**
 * Component to view list of tasks
 */

interface Props {
    taskList: any;
    setTaskList: Function;
}

const List = ({ taskList, setTaskList }: Props) => {
    // Function to remove task
    const handleDelete = (index: number) => {
        taskList.splice(index, 1);
        setTaskList([...taskList]);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    };

    return (
        <ul className={styles.list}>
            {taskList.length > 0 ? (
                <>
                    {taskList.map((task: any, index: number) => (
                        <li key={index} className={styles.singleTask} data-testid="list-item">
                            {task}
                            <span style={{ cursor: "pointer" }} onClick={() => handleDelete(index)}>
                                <svg
                                    fill="#000000"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30 30"
                                    width="20px"
                                    height="20px"
                                >
                                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                </svg>
                            </span>
                        </li>
                    ))}
                </>
            ) : (
                <h5 data-testid="no-tasks" className={styles.noTasks}>
                    There are no tasks pending
                </h5>
            )}
        </ul>
    );
};

export default List;
