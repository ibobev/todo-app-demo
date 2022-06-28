import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import services from '../services/taskService';
import AddTask from "../components/form-components/AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    

    useEffect(() => {
        getAllTasks();
    }, []);

    const getAllTasks = () => {
        services.getAllTasks().then((res) => {
            setTasks(res.data.tasks);

        }).catch(error => {
            console.log(error);
        })
    }

    const createNewTask = (task) => {
        services.createTask(task).then((response) => {
          console.log(response.data);
          getAllTasks();
        }).catch(error => {
          console.log(error);
        })
    }

    const deleteTask = (taskId) => {
        services.deleteTaskById(taskId).then((res) => {
           getAllTasks();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <AddTask createNewTask={createNewTask} />
            {tasks.length > 0 ? <TaskList tasks={tasks} deleteTask={deleteTask}/> : <p className="p-message">No tasks to display</p>}
        </div>
    )
}

export default Tasks;
