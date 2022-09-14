import React from 'react';
import style from './style.module.css';

export default function Form({addTodo, todoList}) {
    


  return (
    <div>
        <form className={style.form} onSubmit={addTodo}>
            <label>Task Title:</label>
            <input type="text" name='task'/>
            
            <label>Date:</label>
            <input type="date" name='date' />
            
            <label> Time</label>
            <input type="time" name='time' />
            
            <button>add +</button>
        </form>
        <ul>
            {
              todoList.map((elem, index)=> {
                return(
                <li kay={index}>
                    {elem.task} at {elem.time}, date: {elem.date} 
                </li>)
              })  
            }
            
        </ul>
    </div>
  )
}
