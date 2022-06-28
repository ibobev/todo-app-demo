const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const taskRoutes = require('./routes/taskRoute');

app.use("/api/v1/task", taskRoutes);

app.listen(PORT, () => {
    console.log(`Express started on port ${PORT}; Press CTR+C to terminate...`);
});





