import PropTypes from "prop-types"; // Import PropTypes

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full px-4 py-2 border rounded text-gray-900"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

// PropTypes validxtxion fr rops
SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired, // searchQuery should be a string
  setSearchQuery: PropTypes.func.isRequired, // setSearchQuery should be a function
};

export default SearchBar;
