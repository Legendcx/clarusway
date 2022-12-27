import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

const [darkMode, setDarkMode] = useState(false);
const dispatch = useDispatch()

// darkMode
// ? localStorage.setItem('color-theme', "")
// : localStorage.setItem('color-theme', "dark")


//   if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark');
// } else {
//     document.documentElement.classList.remove('dark')
// }
darkMode
    ? localStorage.setItem("color-theme", "")
    : localStorage.setItem("color-theme", "dark");
 
  if (localStorage.getItem("color-theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <nav className="flex justify-between p-3  text-4xl bg-rose-500">
      <Link className="text-white font-bold border-4 p-2 rounded-md m-1 hover:outline-double " to={"/"}>Go Home</Link>
      <button
        type="button"
        title="Toggle dark/light mode"
        // onClick={() => setDarkMode(!darkMode)}
        onClick={() => dispatch(setDarkMode(!darkMode)) }
        className="flex items-center p-2 mr-2 text-2xl font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-18 h-15 justify-center"
      >
        {darkMode ? (
          <svg
            aria-hidden="true"
            icon="moon"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="2 2 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            icon="sun"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="2 2 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
