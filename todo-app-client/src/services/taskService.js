import axios from 'axios';

const TASK_REST_API_URL = "http://localhost:5000/api/v1/task/";



const getAllTasks = () => {
    return axios.get(TASK_REST_API_URL);
}

const createTask = (task) => {
    return axios.post(TASK_REST_API_URL, task);
}

const deleteTaskById = (taskId) => {
    return axios.delete(TASK_REST_API_URL + taskId);
}

const services = {
    getAllTasks,
    createTask,
    deleteTaskById
}

export default services;