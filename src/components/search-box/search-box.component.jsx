import './search-box.style.css';

const SearchBox = ({ onSearchChange, placeholder, className }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </div>
  );
};
export default SearchBox;
