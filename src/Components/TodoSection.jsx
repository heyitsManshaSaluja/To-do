import React, { useState } from 'react';
import TodoCard from './TodoCard';

const TodoSection = ({ open, todos, setTodos, isDarkMode }) => {
  const initialView = localStorage.getItem("view") || "grid";
  const [view, setView] = useState(initialView);

  const toggleView = () => {
    if (view === "grid") {
      setView("list");
      localStorage.setItem("view", "list")
    }
    else {
      setView("grid");
      localStorage.setItem("view", "grid")
    }
  };

  const pendingTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className={`p-8 flex flex-col items-center justify-center gap-6 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <h2 className='text-center text-2xl font-semibold'>TODO</h2>
      <div className='flex gap-4'>
        <button
          className={`border border-black/10 rounded-md px-5 py-2 hover:brightness-110 transition-all ${isDarkMode ? "bg-[#A59D84] text-white" : "bg-[#FF4545] text-white"}`}
          onClick={open}
        >
          Create Todo
        </button>
        <button
          className={`border border-black/10 rounded-md px-5 py-2 hover:brightness-110 transition-all ${isDarkMode ? "bg-[#A59D84] text-white" : "bg-[#FF4545] text-white"}`}
          onClick={toggleView}
        >
          {view === "grid" ? "List" : "Grid"}
        </button>
      </div>
      <div className='flex gap-4 w-full items-start'>
        {pendingTodos.length > 0 && (
          <div className='flex-1'>
            <h3 className='text-lg font-medium mb-2 text-center'>Pending</h3>
            <div className={`flex gap-4 ${view === "grid" ? "flex-wrap justify-center" : "flex-col"}`}>
              {pendingTodos.map(todo => (
                <TodoCard key={todo.id} todo={todo} setTodos={setTodos} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        )}
        {completedTodos.length > 0 && (
          <div className='flex-1'>
            <h3 className='text-lg font-medium mb-2 text-center'>Completed</h3>
            <div className={`flex gap-4 ${view === "grid" ? "flex-wrap justify-center" : "flex-col"}`}>
              {completedTodos.map(todo => (
                <TodoCard key={todo.id} todo={todo} setTodos={setTodos} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        )}
        {todos.length === 0 && (
          <p className='text-gray-500 text-sm italic mt-4'>No todos added yet!</p>
        )}
      </div>
    </div>
  );
};

export default TodoSection;
