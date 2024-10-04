import PropTypes from "prop-types";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="d-flex justify-content-center m-3">
      <input
        className="form-control me-2 w-25"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onSearchChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
