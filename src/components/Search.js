import React, {Component} from 'react';

class Search extends Component {
    state= {
        input: ''
    }

    handleSearch = (event) => {
        this.props.filteredFood(event.target.value);
        this.setState({input: event.target.value})
    }
    render() {
        return (
            <div>
            <input 
            type="text"
            className="input"
            onChange={this.handleSearch} 
            value={this.state.input}
            />
            </div>
        )
    }
}
// function Search(props) {
//     return (
//       );
//   }

export default Search;