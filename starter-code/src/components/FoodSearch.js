import React, { Component } from 'react'

export default class FoodSearch extends Component {
    constructor(){
        super();
        this.state = {
        }
    }    

    handleInputChange = (event) => {
        const target = event.target;
        const type = event.target.type;
        const value = target.value;
        const name = target.name;

        this.props.filterFoodListHandler( value );
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <input style={{width:"100%"}} type = "text" name="filter" value={this.props.filterValue} onChange={this.handleInputChange}/><br />
                </article>
            </div>
        )
    }
}
