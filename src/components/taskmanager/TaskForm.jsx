import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleAddTask = () => {
    if (taskName.trim() === '') return;
    addTask({ name: taskName, priority, completed: false });
    setTaskName('');
    setPriority('Medium');
  };

  return (
    <section className="max-w-3xl mx-auto p-4 mb-6">
      <h2 className="text-lg font-semibold mb-2">Add New Task</h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
          className="flex-1 text-gray-900 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="text-gray-500 px-4 py-2 border rounded"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-400 transition"
        >
          Add Task
        </button>
      </div>
    </section>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired, // addTask should be a function and is required
};

export default TaskForm;
