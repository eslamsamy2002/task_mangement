import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OurServices from "./components/OurServices/OurServices";
import TaskManager from "./components/taskmanager/TaskManager";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="overflow-x-hidden">
        <div
          className={
            darkMode
              ? "min-h-screen bg-gradient-to-b from-gray-900 via-teal-800 to-green-700 text-gray-100 backdrop-blur-xl"
              : "min-h-screen bg-gradient-to-b from-gray-100 via-teal-100 to-green-100 text-gray-900"
          }
        >
          <Navbar />
          <div className="flex justify-end p-4">
            <button
              onClick={toggleDarkMode}
              className="px-4 scale-125 py-2 text-white rounded transition transform hover:scale-140 z-10"
            >
              {darkMode ? (
                <i className="fa-solid fa-toggle-on text-3xl "></i>
              ) : (
                <i className="fa-solid fa-toggle-off text-3xl text-gray-600"></i>
              )}
            </button>
          </div>
          <Routes>
            <Route path="/task-manager" element={<TaskManager />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <OurServices />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
