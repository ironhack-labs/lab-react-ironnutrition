import React from 'react';

const Search = (props) => {

    const handleChange = (event) => {
        console.log(event.target);
        let { value } = event.target;
        props.search(value);
    }
        
    return (
        <input type="text" placeholder="Procurar comidas" onChange={(e) => handleChange(e)}/>
    )

}

export default Search;