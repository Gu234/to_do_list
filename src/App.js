import React from 'react';
import ToDoList from './components/ToDoList';
import './scss/main.scss';

function App() {
  return <div className='container'>
    <div className='toDoList'>
      <h1>To Do List</h1>
      <ToDoList></ToDoList>
    </div>
  </div>
  
}

export default App;
