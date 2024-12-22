import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Lottie from "lottie-react";
import animationData from "../../assets/ani1.json";
import SearchBar from './SearchBar'; 

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    setTasks(localTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, task];
      return updatedTasks;
    });
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        completed: !updatedTasks[index].completed, // Toggle the completion status
      };
      return updatedTasks; 
    });
  };
  

  const deleteTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update localStorage after task deletion
      return updatedTasks;
    });
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-transparent backdrop-blur-md">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative z-10">
        <TaskForm addTask={addTask} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TaskList
          tasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default TaskManager;
