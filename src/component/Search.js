import { useState } from "react";

function Search(props) {
    const [firstLetter, setFirstLetter] = useState("All");

    const handleSearchInput = e => setFirstLetter(e.target.value)
    const handleSubmit = e => {
        e.preventDefault();
        // console .log(firstLetter)
        props.searchFood(firstLetter)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Searching</label>
            <input
                type="text"
                name="searching"
                value={firstLetter}
                onChange={handleSearchInput}
            />
            <button type="submit">Search</button>

        </form>
    );
}

export default Search;