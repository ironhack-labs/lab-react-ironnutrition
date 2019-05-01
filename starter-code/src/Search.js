import React from 'react';

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
    }

    searchFood(e, key) {
        const newState = {...this.state}
        newState[key] = e.target.value

        this.setState(newState);
        foodList.filter(food => {
            food
        })
        
    }

    render() {
        return (
        <form>
        <input
            type="text"
            placeholder="Search a food"
            value={this.state.name}
            onChange={(e) => this.searchFood(e, 'name')} />
        </form>
        )
    }

}


export default Search;