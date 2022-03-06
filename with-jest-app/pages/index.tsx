import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import AddTask from "@/components/Home/AddTask";
import List from "@/components/Home/List";

/**
 * Home page component
 */
export default function Home() {
    const [taskList, setTaskList] = useState("");
    const [loading, setLoading] = useState(true);

    // Function to load task list when component loads
    useEffect(() => {
        const _taskList: any = localStorage?.getItem("taskList");
        if (_taskList) {
            setTaskList(JSON.parse(_taskList));
        }
        setLoading(false);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>List of Tasks</h1>
                <AddTask setTaskList={setTaskList} />
                <List taskList={taskList} setTaskList={setTaskList} />
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Todo App with Unit Testing Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}
