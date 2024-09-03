import React, { useState } from 'react';

export default function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding a task
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue(''); // Clear the input field after adding
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className=' flex justify-center pt-28 w-full'>
      <div className='border p rounded-2xl bg-orange-700'>
        <div className='bg-slate-400 p-10'>
          <div className='flex'>
            <input
              className='px-10 rounded'
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a new task"
            />
            <button
              className="bg-red-500 ms-1 text-white px-6 py-2 rounded"
              onClick={handleAddTask}
            >
              ADD
            </button>
          </div>
          <ul className='mt-5'>
            {tasks.map((task, index) => (
              <li key={index} className='flex justify-between text-white bg-blue-600 my-2 p-3 rounded'>
                {task}
                <button
                  className="bg-red-700 text-white px-2 rounded"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
