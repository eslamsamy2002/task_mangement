
import Lottie from 'lottie-react';
import animationData from '../../assets/ani3.json'; // Add an animation JSON here

const AboutPage = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-transparent backdrop-blur-md">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="w-full h-full opacity-30"
        />
      </div>

      <div className="relative z-10 p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg  mb-4">
          We are a team of passionate developers dedicated to creating amazing web applications. Our goal is to provide top-notch services that help businesses grow and succeed online.
        </p>
        <p className="text-lg ">
          Our team brings a wealth of experience in frontend and backend development, UI/UX design, and project management. We work closely with our clients to bring their ideas to life and deliver solutions that drive results.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
