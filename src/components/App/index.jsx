import {useState} from 'react';
import Form from '../Form';
import style from './style.module.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = event => {
    event.preventDefault();
    const data = event.target,
    newTodo = {
      task: data.task.value,
      date: data.date.value,
      time: data.time.value
    }
    todoList.push(newTodo);
    setTodoList([...todoList])  
  }

  return (
    <div className={style.app}>
      <header className={style.app}>
        <h1>TodoList</h1>
      </header>
      <Form addTodo={addTodo} todoList={todoList}/>
      
    </div>
  );
}

export default App;
