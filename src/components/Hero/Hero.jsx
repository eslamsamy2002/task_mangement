import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/ani.json";

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-semibold">Stay Organized</h1>
          <p className="text-1xl lg:text-2xl ">
            Simplify your workflow by managing your tasks efficiently. Create, prioritize, and track all your tasks in one place.
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <Link to="/task-manager">
            <button className="px-4 py-2 bg-gradient-to-r hover:scale-105 from-green-600 to-yellow-500 text-white rounded-full shadow-lg hover:from-yellow-500 hover:to-green-500 transition-all">
               Start now
            </button>
            </Link>
          </div>
        </div>
        {/* animation section */}
        <div className="flex flex-col justify-center">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
