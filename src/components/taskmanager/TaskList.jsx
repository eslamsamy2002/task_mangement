import PropTypes from 'prop-types';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-2">Task List</h2>
      {tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-4 border rounded ${ 
                task.completed ? 'bg-green-100' : 'bg-white'
              } transition`}
            >
              <div>
                <p className={`font-medium text-gray-900 ${task.completed ? 'line-through' : ''}`}>{task.name}</p>
                <p className="text-sm text-gray-900">Priority: {task.priority}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleTaskCompletion(index)} // Ensures the correct index is passed
                  className="px-3 py-1 bg-green-700 text-white rounded hover:bg-yellow-600 transition"
                >
                  <i className={`fa-${task.completed ? 'solid fa-rotate-left' : 'regular fa-circle-check'}`}></i>
                </button>

                <button
                  onClick={() => deleteTask(index)} 
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  <i className="fa-solid fa-trash-alt"></i> 
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No tasks available. Add a task to get started!</p>
      )}
    </section>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
