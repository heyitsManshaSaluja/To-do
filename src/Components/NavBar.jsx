const NavBar = ({ isDarkMode, toggleTheme }) => {
  return (
    <div
      className={`h-16 px-6 ${
        isDarkMode
          ? "bg-[#A59D84] text-white"
          : "bg-gradient-to-r from-[#FF4545] to-[#FF6B6B] text-white"
      } flex items-center justify-between gap-4 shadow-md`}
    >
      <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center animate-pulse">
        <span className={` font-bold ${isDarkMode ? "text-[#030303]" : "text-[#FF4545]"}`}>✓</span>
      </div>
      <h1 className="text-xl font-bold tracking-wide drop-shadow-glow animate-fade-in">
        Todo App
      </h1>
      {/* darkmode button mein */}
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded font-bold shadow  hover:bg-gray-200 ${
          isDarkMode
            ? "bg-[black] text-white hover:bg-[#A59D84] hover:border-black border hover:text-black"
            : "bg-white text-[#FF4545]"
        }`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default NavBar;
