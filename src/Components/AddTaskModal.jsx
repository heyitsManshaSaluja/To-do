import React, { useState } from 'react';

const AddTaskModal = ({ close, setTodos,isDarkMode, todo }) => {
  const [title, setTitle] = useState(todo?.title || '');
  const [description, setDescription] = useState(todo?.description || '');
  

  function addTodo() {
    if(todo) {
      const updatedTodos = (prev) =>
        prev.map((t) => (t.id === todo.id ? { ...t, title, description } : t));

      setTodos((prev) => {
        const todos = updatedTodos(prev);
        localStorage.setItem('todolist', JSON.stringify(todos));
        return todos;
      });

      close();

      return;
    }
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle || !trimmedDescription) {
      alert('Please fill all fields');
      return;
    }

    const newTodo = {
      title: trimmedTitle,
      description: trimmedDescription,
      completed: false,
      id: Date.now(),
    };

    setTodos((prev) => {
      const updatedTodos = [newTodo, ...prev];
      localStorage.setItem('todolist', JSON.stringify(updatedTodos));
      return updatedTodos;
    });

    // Reset form
    setTitle('');
    setDescription('');
    close();
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={close}
    >
      <div
        className={`h-[60vh] w-[300px] ${isDarkMode ? "bg-[#A59D84]" : "bg-[#FF9C73]"} rounded-md p-5 flex flex-col gap-3 relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute -top-3 -right-1 text-lg font-bold bg-white rounded-full px-2 text-black" onClick={close}>
          X
        </button>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full p-2 rounded-md border border-black/10 text-black"
          placeholder="Enter todo title..."
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-full max-h-full rounded-md p-2 border border-black/10 resize-none text-black"
          placeholder="Enter todo description..."
        />

        <button
          onClick={addTodo}
        className={`mt-2 py-2 px-4  ${isDarkMode?  "bg-black":"bg-[#FF4545]" } text-white rounded-md hover:brightness-110 transition-all`}
        >
          {todo? "UPDATE" : "ADD"} TODO
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
