import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          foodFilter: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            foodFilter: event.target.value
        })
        this.props.onFilter(event.target.value)
    }
      

    render() {
        return (
            
            <div className="control ">
                <input className="input has-margin-top-30 has-margin-bottom-30" type="search" placeholder="Search" 
                value={this.state.foodFilter} 
                onChange={this.handleChange}/>
            
            </div>

        )
    }

}