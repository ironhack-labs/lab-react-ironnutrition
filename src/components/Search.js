import "./Search.css"
import { useState } from "react";


function Search() {

    // const [searchInput, setSearchInput] = useState("");

    // function inputHandler(e) {
    //     setSearchInput(e.target.value);
    //     updateMyList(e.target.value);
    // }


    return (

    <div id="root">
        <div class="container">
          <h1 class="title">IronNutrition</h1>
          <div>
            <input type="text" class="input search-bar" name="search" placeholder="Search" value=""/>
          </div>
    </div>
    </div>
    
    )
}


export default Search;