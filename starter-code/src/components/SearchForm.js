import React, { Component } from "react";

class SearchForm extends Component{
    state = {
        busqueda: ""
    }

    handleOnChange = (e) => {
        const {busquedaFoods} = this.props;
        console.log(e.target.value)
        busquedaFoods(e.target.value)
    }

    render()  {
        return (
            <div className="SearchForm">
                <input type="text" className="input" placeholder="Search..." onChange={this.handleOnChange} />
            </div>
        )
    }
}

export default SearchForm;