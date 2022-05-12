import React from 'react';

function Search(props){

    const searchInFood = (e)=> {
        props.searchFood(e.target.value)
    }

return(
    <form className='search'>
    Search Food: 
        <input type='text' name='search' value={props.search} onChange={searchInFood}></input>
    </form>
)

}

export default Search;