import React from 'react';

const search = (props) => {
    return (

        <div>
        <input type="text" onChange={props.aMethodSearch} class="input search-bar" name="search" placeholder="Search"/>
         </div>


    )
  };

  export default search;

