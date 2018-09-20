import React from "react";



class Search extends React.Component{
// add code to manage input 
//state connected to input value  
// on change that update state
// give APP a function that call Search info

    render(){

    
        return (
            <div>
                <input type="text" className="input search-bar" name="search" placeholder="Search" value={this.props.inputValue} onChange={this.props.handleEvent}/>
            </div>
        )
    }
}
 




export default Search;