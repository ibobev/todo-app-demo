import {useState} from 'react';

const AddTask = ({createNewTask}) => {
 
  const[description, setDescription] = useState('');
  const[date, setDate] = useState('');

  let task = {description, date}

  const[showForm, setShowForm] = useState(false);
  const[btnText, setBtnText] = useState('Create Task');
  
  const showAddForm = () => {
    setShowForm(!showForm);
  }

  const changeBtnText = () => {
    if(btnText === 'Create Task'){
      setBtnText('Close');
    }else {
      setBtnText('Create Task');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDescription('');
    setDate('');
  }

  return (
    <div className="add-task-container">
      <div className="btn-box">
        <button onClick={() => {showAddForm(); changeBtnText();}} className="btn-add">{btnText}</button>
      </div>
      { showForm && (
      <form className="add-task-form" onSubmit={handleSubmit}>
        <h2 className="h2-add-form">Add Task</h2>
        <div className="border-dashed"></div>
        <div className="input-container">
          <label className="lbl"><i className="fas fa-align-left fa-lg"></i></label>
          <input 
            className="input-field" 
            type="text" name="description" 
            placeholder="Enter description" 
            value = {description} 
            onChange = {(e) => setDescription(e.target.value)} 
          />
        </div>
        <div className="input-container">
          <label className="lbl"><i className="fas fa-calendar-day fa-lg"></i></label>
          <input 
            className="input-field" 
            type="date" 
            name="date" 
            value = {date} 
            onChange = {(e) => setDate(e.target.value)} 
          />
        </div>
        <div className="border-dashed"></div>
        <button className="btn-submit" type="submit" onClick={() => createNewTask(task)}>Add</button>
      </form>
      )}
    </div>
  );
}

export default AddTask;
