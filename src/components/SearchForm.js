import React from 'react';
import 'bulma/css/bulma.css';

const SearchForm = ({ searchFood }) => {
    const searchQueryHandle = (event) => {
        event.preventDefault();
        const { value } = event.target;
        searchFood(value);
    }

    return(
        <form>
            <input className="input my-4" type="text" name='search' onChange={e => searchQueryHandle(e)}/>
        </form>
    );
};

export default SearchForm;