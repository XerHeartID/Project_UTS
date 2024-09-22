import { Link } from "react-router-dom";
import Button from "./button";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center text-base mb-6 md:mx-6">
      <nav className="hidden md:flex gap-4 lg:gap-8 font-medium">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/About">
          <p>About</p>
        </Link>
        <Link to="/Contact">
          <p>Contact</p>
        </Link>
      </nav>

      <i className="bx bx-menu text-3xl md:hidden" onClick={toggleMenu}></i>

      {isOpen && (
        <ul className="md:hidden absolute text-lg dark:text-white font-medium w-full top-20 transform -translate-x-10 bg-white dark:bg-bgdark">
          <li>
            <Link to="/">
              <p className="my-2">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <p className="my-2">About</p>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <p className="my-2">Contact</p>
            </Link>
          </li>
        </ul>
      )}

      <div className="relative w-3/5">
        <input
          type="search"
          name="search"
          id="search"
          className="rounded-md bg-slate-100 dark:bg-inherit dark:border w-full pl-4 pr-10 py-2 focus:outline-none"
          placeholder="Search..."
        />
        <i className="bx bx-search-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-xl"></i>
      </div>

      <Button text={"Login"} />
    </header>
  );
}

export default Header;
