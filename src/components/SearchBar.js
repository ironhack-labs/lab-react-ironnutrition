import React from 'react'
import 'bulma/css/bulma.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString : ''
        }
    }


    handleSearch(event) {
        this.props.triggerSearch(this.state);
        event.preventDefault();
    }

    handleInputChange(event) {
        this.setState({
            searchString: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={event => this.handleSearch(event)}>
                    <input type='text' name='search' value={this.state.searchString} 
                        placeholder='Search...' 
                        onChange={event => this.handleInputChange(event)}/>
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
        );
    }
}

export default SearchBar;