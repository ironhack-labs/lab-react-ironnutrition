import React from "react";
import Search from "./Search";
import AddForm from "./AddForm";

function Header(props) {
    
    const { filterByName, displayForm, toggleFormDisplay, addFood } = props;

    return (
      <div>
        <h1 className="title mt-5">IronNutrition</h1>

        <Search filterByName={ filterByName } />

        <hr />

        <button className="button is-info" onClick={ toggleFormDisplay }> { (displayForm ? 'Hide Form' : 'Add Food') } </button>

        { displayForm && (<AddForm addFood={ addFood } toggleFormDisplay = { toggleFormDisplay } />) }

        <hr />
      </div>  
    );
}

export default Header;