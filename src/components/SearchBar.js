function SearchBar(props) {
    return (
        <label>
            Search:
            <input type="text" onChange={props.filter} />
        </label>
    );
}

export default SearchBar;
