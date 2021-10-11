import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {

    state = {
        searchContent: '',
    }

    searchOnChangeHandler = event => {
        // console.log(event.target);

        const { name, value } = event.target;
        const { foodArray } = this.props;
        // console.log(name, value);

    //     // [name] in square brackets is to create a dynamic key name in the object
        this.setState(
            {
            [name]: value
            }, 
        () => {
            if (this.state.searchContent.length === 0){
                this.props.onChangeSearchHandler(foodArray)
            } else {
                const filteredFood = foodArray.filter((food) => food.name.toLowerCase().includes(this.state.searchContent.toLowerCase()));
                this.props.onChangeSearchHandler(filteredFood);
            }
        })
    }


    render() {
        return (
            <div>
                <input 
                name = "searchContent" 
                value={this.state.searchContent}
                onChange={this.searchOnChangeHandler}
                />
                    
                
            </div>
        )
    }
}
