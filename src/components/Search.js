import React, { useState } from "react";

const Search = ( {foodsInitialValue, foods, setFoods} ) => {
    const [inputText, setText] = useState("");

    const handleSearchChange = event => {
        event.preventDefault();
        setText(event.target.value);

        const newFoods = [...foods].filter(food => food.name.includes(event.target.value));

        if (event.target.value !== "") {
        setFoods(newFoods);
        } else {
        setFoods(foodsInitialValue);
        };
    };

    return (
        <div>
            <input
                type="text"
                className="input search-bar"
                name="search"
                placeholder="Search"
                value={inputText}
                onChange={e => handleSearchChange(e)} />
        </div>
    );
};

export default Search;