import React, {createContext, useContext, useEffect, useState} from 'react'
import {getDocs} from "firebase/firestore";
import {dbInstance} from "../AddTaskModal";

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

export default function TaskHooks({ children }) {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        getDocs(dbInstance)
            .then((data) => {
                setTasks(data.docs.map((item) => {
                    return {...item.data(), id: item.id}
                }))
            })
    }

    useEffect(() => {
        getTasks()
    }, [tasks])


    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <TaskContext.Provider value={{ tasks, getTasks, removeTask }}>
            {children}
        </TaskContext.Provider>
    )
}
