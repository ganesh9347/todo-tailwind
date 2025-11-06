import React,{useState, useEffect} from 'react';
import TodoItem from '../components/TodoItem';
import {Link} from 'react-router-dom'; 
import Button from '../components/Button';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
     }, []);


    const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    return (
        <div>
          <div>
          <div className="flex justify-center items-center mt-4 mb-8 ml-1">
            <h1>To Do List</h1>
            <div className="button-section">
          <Link to="/add">
            <Button text="Add Task" />
          </Link>
          </div>
        </div>
              {tasks.length === 0 ? (
        <p className="empty-text">No tasks yet. Add one!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, i) => (
            <div>
            <TodoItem key={i} tasks={task} Delete={() => handleDelete(i)} />
            <Button onClick={() => handleDelete(i)} text="Delete" />
            </div>
          ))}
        </ul>
      )}
            </div>
        </div>
    )
}

export default Home;

