import NavBar from "./Components/NavBar";
import TodoSection from "./Components/TodoSection";
import AddTaskModal from "./Components/AddTaskModal";
import { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todolist");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      return [];
    }
  });

  // Theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={isDarkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      {isOpen && <AddTaskModal close={closeModal} setTodos={setTodos} isDarkMode={isDarkMode} />}
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <TodoSection open={openModal} todos={todos} setTodos={setTodos} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
