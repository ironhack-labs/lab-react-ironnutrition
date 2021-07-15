import React, {useState} from "react";



function SearchBar(props) {

    const[formState, setFormState] = useState('')
    const{filterFood} = props

    function handleSearch(event){
        setFormState(event.target.value)

    }

    
    function handleOnSubmit(event){
        event.preventDefault();
                            
        filterFood(formState)

        setFormState('')

    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>          
                <input type="text" name='formState' placeholder="Search.." value={formState} onChange={handleSearch} />
                <button type="submit">Search a Food</button>
            </form>
        </div>
    )
}






export default SearchBar