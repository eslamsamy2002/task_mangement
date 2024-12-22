import { Link } from "react-router-dom";
import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" py-4 lg:py-6 ">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          
        </div>
        {/* Menu section */}
        <div className="flex justify-center items-center gap-10 z-10">
          <ul className="gap-8 hidden sm:flex">
            <Link to="/"><li className="hover:border-b-2 border-green-400 uppercase">Home</li></Link>
            <Link to ="/about"><li className="hover:border-b-2 border-green-400 uppercase">About</li></Link>
            <Link to ="/contact"><li className="hover:border-b-2 border-green-400 uppercase">Contact</li></Link>
          </ul>
          {/* login section */}
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="" className="w-10 rounded-full " />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
