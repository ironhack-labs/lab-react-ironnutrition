import React, { Component } from 'react';

class Search extends Component {
    // constructor(props) {
    //     super(props);
    // }

    handleFormSubmit = (event) => {
      event.preventDefault();
      }

    handleChange = (e) =>{
        // console.log(e.target.value);
        this.props.inputChange(e.target.value);
    }
      
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input onChange={this.handleChange} type="text" className="input search-bar" name="search" placeholder="Search" value={this.props.inputValue} />
                </form>
            </div>
        )
    }
}

export default Search;