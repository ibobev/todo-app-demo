const db = require("../utils/db");

module.exports.getAllTasks = async (req, res) => {

    let taskList = [];

    const getAllTasksQuery = "SELECT * FROM todo_list";

    try {
        const result = await db.query(getAllTasksQuery);
        taskList = result.rows;
        return res.json({
            status: 'success',
            tasks: taskList
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            statusMessage: 'Internal Server Error'
        });
    }
};

module.exports.createTask = async (req, res) => {
    const {
        description,
        date
    } = req.body;

    const createTaskQuery = "INSERT INTO todo_list(description, date) VALUES($1,$2)";
    const values = [description,date];

    try {
        await db.query(createTaskQuery, values);
        return res.json({
            status: 'success',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            statusMessage: 'Internal Server Error'
        });
    }
};

 module.exports.deleteTask = async (req, res) => {
    const taskId = parseInt(req.params.id);

    const deleteTaskById = "DELETE FROM todo_list WHERE id=$1";

    try {
        await db.query(deleteTaskById,[taskId]);
        res.json({ status: 'success' });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            statusMessage: 'Internal Server Error'
        });
    }
 }