import React from 'react';
import './Search.css';


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }
    
    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({[name]: value});
        this.props.onSearch(value)
    }

    render() {
        return(
            <div className="search">
                <input name="search" className="input" type="search" placeholder="Search" value={this.state.search} onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }
}

export default Search;