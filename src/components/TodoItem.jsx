import React from 'react';

const TodoItem = (props) => {
    const {tasks} = props; 
   


  return (
    <li className="flex justify-between items-center mt-2 w-auto p-4 bg-[#f9f9f9] rounded shadow">
        <p>{tasks}</p>
    </li>
  );
};

export default TodoItem; 