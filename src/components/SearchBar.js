import React, {useState} from 'react';

export default function Search (props) {

    const [formState, setFormState] = useState("")

    function handleChange(event){
        setFormState( { ...formState, [event.target.name]: event.target.value } )
      }
    
      function handleOnSubmit(event){
        event.preventDefault();
        props.searchFunction(formState.searchBar)
        formState.searchBar = "";
      }

    return (
        <div className="SearchBar">
          <br></br>
          <form onSubmit={handleOnSubmit} >

            <input className = "input" type="text" name="searchBar" value= {formState.searchBar} onChange={handleChange} /><br></br><br></br>
            <button className="button is-primary" type="submit">Search</button><br></br><br></br>
          
          </form>
        </div>
      );
}