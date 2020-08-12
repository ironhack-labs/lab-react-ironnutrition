import React, { Component } from 'react';
import FoodBox from '../FoodBox/FoodBox';
import FoodList from '../FoodList/FoodList';

export default class SearchFood extends Component {
    constructor(props){
        super(props)

        this.state = {
            valueInput: '',
        }
    }

    handleChange = event => {
        let searchFood = event.target.value;
        this.setState({
            valueInput: searchFood,
        }, () => { this.props.searchTheFood(searchFood) })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" value={this.state.valueInput} onChange={(e) => this.handleChange(e)} placeholder="Search.."/>

                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
