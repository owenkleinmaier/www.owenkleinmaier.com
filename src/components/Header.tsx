import { useState, useEffect } from "react";
import { Moon, Sun, House } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-between items-center p-6 bg-white shadow-lg font-sans dark:bg-gray-800 dark:shadow-lg">
      <Link to="/">
        <House
          size={28}
          className="cursor-pointer text-gray-800 dark:text-white hover:scale-110 transition-transform duration-300"
        />
      </Link>

      <nav className="mx-auto">
        <ul className="flex space-x-8 text-lg font-7xl">
          <li>
            <a
              href="#about"
              className="hover:text-my-blue dark:hover:text-blue-300 dark:text-white"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-my-blue dark:hover:text-blue-300 dark:text-white"
            >
              skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-my-blue dark:hover:text-blue-300 dark:text-white"
            >
              projects
            </a>
          </li>
        </ul>
      </nav>
      {isDarkMode ? (
        <Sun
          size={28}
          weight={isHovered ? "fill" : "bold"}
          onClick={handleToggle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`cursor-pointer transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          } text-yellow-400 dark:text-yellow-300`}
        />
      ) : (
        <Moon
          size={28}
          weight={isHovered ? "fill" : "bold"}
          onClick={handleToggle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`cursor-pointer transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          } text-gray-800 dark:text-gray-300`}
        />
      )}
    </header>
  );
};

export default Header;
