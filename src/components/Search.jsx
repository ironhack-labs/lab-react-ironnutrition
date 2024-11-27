function Search({ search, handleSearch }) {
    return (
        <>
            <h2>Search</h2>
            <label htmlFor="search"></label>
            <input
                value={search}
                onChange={(event) => handleSearch(event)}
                type="search"
                name="search"
                id="search"
                className="mb-2 bg-light text-black"
            />
        </>
    );
}

export default Search;