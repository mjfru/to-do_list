/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
import Task from "./components/Task";


function App() {
  //? What can change in this app? Use useState for those elements
  //* [currentValue, updatedValue] = (initializedValue)]
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const taskListItem = {
    text: newTask,
    complete: false
  };

  const handleNewTask = (e) => {
    //* Don't let it refresh when a new task is submitted
    e.preventDefault();
    console.log('New task is', newTask)
    //* Prevent an empty field from being submitted
    newTask.length <= 0 ? null :
    //* New array containing all of the 'old' items (via spread operator) and the new one
    //? How are the two useState(s) connected though?
    setTasks([...tasks, taskListItem])
    setNewTask("");
  };


  const handleDeleteTask = (deleteIndex) => {
    //* _task indicates that filter takes two parameters, but task won't be used and it removes the red squiggle
    const filteredTasks = tasks.filter((_task, i) => {
      return i !== deleteIndex;
    });
    setTasks(filteredTasks);
  }

  const handleCheckbox = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (index == i) {
        task.complete = !task.complete;
      } 
      return task;
    });
    setTasks(updatedTasks)
  }

  return (
    <>
      <h1>Create Your Own To-Do List</h1>
      <div id="wrapper">
        <h2>My To-Do List</h2>
        <form onSubmit={ (e) => { handleNewTask(e); } } >
          <input type="text" className='form-control'  value={newTask} onChange={ (e) => { setNewTask(e.target.value) } } />
          <button className={"btn btn-primary"}>Add Task</button>
        </form>
        <hr/>
        
        {tasks.map((task, i) => {
            return <Task key={i} task={task} handleCheckbox={handleCheckbox} i={i} handleDeleteTask={handleDeleteTask} />
          })
        }
      </div>
    </>
    )
}

export default App
