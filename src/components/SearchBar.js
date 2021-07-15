import React, {useState} from 'react';

export default function Search (props) {

    const [formState, setFormState] = useState("")

    function handleChange(event){
        setFormState( { ...formState, [event.target.name]: event.target.value } )
      }
    
      function handleOnSubmit(event){
        event.preventDefault();
        props.searchFunction(formState.searchBar)
        setFormState( "" )
      }

    return (
        <div className="SearchBar">
          <form onSubmit={handleOnSubmit} >

            <input type="text" name="searchBar" onChange={handleChange} /><br></br><br></br>
    
           <button type="submit">Search</button><br></br><br></br>
          </form>
        </div>
      );
}