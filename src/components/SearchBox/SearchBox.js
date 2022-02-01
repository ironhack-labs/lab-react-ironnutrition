import './SearchBox.css';

function SearchBox(props) {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Find your favorite food"
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchBox;
