
const TaskList = ({tasks, deleteTask, completeTask}) => {
  
  console.log(tasks);

  return (
    <div className="table-wrap">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {
          tasks.map(task => 
            <tr key={task.id} className="border-table-item">
              <td>{task.id}</td>
              <td>{task.description}</td>
              <td>{task.date.split("T")[0]}</td>
              <td>
              <button onClick={() => deleteTask(task.id)} className="btn btn-delete"><i className="fas fa-trash-alt fa-2x" style={{color:'#0380da'}}></i></button>
              </td>
            </tr>
            )
        }
      </tbody>
    </table>
    </div>
    );
}

export default TaskList;
