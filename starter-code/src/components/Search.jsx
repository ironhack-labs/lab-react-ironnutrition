import React, { Component } from 'react';
import FoodBox from './FoodBox';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            foods: this.props.foods,
        }
    }

    inputHandler(event) {
        let { value } = event.target;
        this.setState({
            name: value,
        })
        let search = this.props.foods.filter((el) => {
            if (el.name.toLowerCase().includes(this.state.name.toLowerCase())) {
                return el
            }
        })
        this.setState({
            foods: search,
        })
    }

    render() {
        return (
        <div>
        <input className="input" type="text" name="search" value={this.state.name} onChange={(e) => this.inputHandler(e)} />
        <FoodBox {...this.state}/>
        </div>
        )
    }
}

export default Search;