import React, { Component } from 'react'
import FoodsJSON from './../foods.json'

class Search extends Component {
    state = {
      
      foods: FoodsJSON
    };

    onSearch = (event) => {
        const value = event.target.value
    }

    render() {
        return (
            <div>
                 <input type = "text" placeholder="Food finder ..." value={this.value}></input>

                {this.state.foods.map((f, i) => {
                 
                   
                })}
                
             
            </div>
        )
    }
}

export default Search
