import React, { Component } from 'react';
import '../assets/css/SearchBar.css'

class SearchBar extends Component {
    state = { 

     }

    render() { 
        return ( 
            <div className="SearchBar">
                <input type="text" id="food" name="food" placeholder="Search..."/>
            </div>
         );
    }
}
 
export default SearchBar;