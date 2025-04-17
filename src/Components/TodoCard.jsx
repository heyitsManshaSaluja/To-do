import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';

const TodoCard = ({ todo, setTodos, isDarkMode }) => {
  const { id, title, description, completed } = todo;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCompleted = () => {
    setTodos((prev) => {
      const newTodos = prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      localStorage.setItem("todolist", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleRemove = (id) => {
    setTodos((prev) => {
      const updatedTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todolist", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  // const handleUpdate = (id) => {
   

  //   if (updatedTitle && updatedDescription) {
  //     setTodos((prev) => {
  //       const updatedTodos = prev.map((todo) =>
  //         todo.id === id ? { ...todo, title: updatedTitle, description: updatedDescription } : todo
  //       );
  //       localStorage.setItem("todolist", JSON.stringify(updatedTodos));
  //       return updatedTodos;
  //     });
  //   }
  // };

  return (
    <>
      {isOpen && <AddTaskModal isDarkMode={isDarkMode} close={()=>setIsOpen(false)} setTodos={setTodos} todo={todo}/>}
      <div className={`h-[300px] w-[300px] border border-black/10 rounded-lg p-3 ${isDarkMode ? "bg-[#A59D84]" : "bg-[#FF9C73]"}`}>
        <div className="flex justify-between items-center mb-2">
          <input className="font-semibold text-lg text-black bg-transparent outline-0 border-0" value={title}
            onClick={() => setIsOpen(true)} 
          />
          <button onClick={toggleCompleted} className="transition-all duration-200 ease-in-out">
            {completed ? (
              <div className={`${isDarkMode ? "text-black" : "text-red-500"} text-xl animate-pulse`}>❤︎</div>
            ) : (
              <div className="w-5 h-5 text-white text-xl animate-pulse">❤︎</div>
            )}
          </button>
        </div>

        <div className="w-full h-[180px] border border-black/10 rounded-lg p-2 bg-[#FFF5E4] overflow-y-auto">
          <p className="text-sm break-words text-black"   onClick={() => setIsOpen(true)}  >{description}</p>
        </div>

        <div className="flex justify-end mt-3 gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className={`border border-black px-3 py-1 rounded-lg text-xs mt-3 
            ${isDarkMode ? "bg-black" : "bg-[#FF4545] hover:bg-[#D33B3B]"} 
            text-white transition duration-150 ease-in-out`}
          >
            Update
          </button>
          <button
            onClick={() => handleRemove(id)}
            className={`border border-black px-3 py-1 rounded-lg text-xs mt-3 
            ${isDarkMode ? "bg-black" : "bg-[#FF4545] hover:bg-[#D33B3B]"} 
            text-white transition duration-150 ease-in-out`}

          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
