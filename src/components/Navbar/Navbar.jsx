import { Link } from "react-router-dom";
import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react"; // Import useState to manage menu visibility

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for controlling menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  return (
    <div className="py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        
        <div>
         
        </div>

        
        <div className="flex justify-between items-center w-full">
         
          <ul className={`flex gap-8 sm:flex ${menuOpen ? 'flex-col sm:flex-row' : 'hidden sm:flex'}`}>
            <Link to="/">
              <li className="hover:border-b-2 border-green-400 uppercase">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:border-b-2 border-green-400 uppercase">About</li>
            </Link>
            <Link to="/contact">
              <li className="hover:border-b-2 border-green-400 uppercase">Contact</li>
            </Link>
          </ul>

          
          <button onClick={toggleMenu} className="sm:hidden text-2xl">
            {menuOpen ? 'X' : '☰'}
          </button>

          
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="Profile" className="w-10 rounded-full" />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
