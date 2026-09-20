import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  useEffect(() => { document.documentElement.classList.toggle("dark-mode", isDarkMode); localStorage.setItem("theme", isDarkMode ? "dark" : "light"); }, [isDarkMode]);
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Yusuf Haji</Link>
      </div>
      <div className="nav">
        <nav>
          <a href="#projects">Work</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className="console">
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode((current) => !current)}
        />
        <label htmlFor="toggle" className="toggle--label" aria-label="Toggle dark mode">
          <span className="toggle--label-background"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
