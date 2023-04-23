import {formatDate} from "./formatDate";

export const todayTasks = (tasks) => {
    return tasks.filter((task) => formatDate(task.taskDate) === new Date().toLocaleDateString())
}