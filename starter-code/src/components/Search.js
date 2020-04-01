import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
             search: ''
         };
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value})
    }

    



    render() {
        console.log(this.state.search)
        return (
            <div>
                <input type="text" className="input search-bar" name="search" placeholder="Search your meal" onChange={e => this.handleChange(e)} value={this.state.search} />
            </div>
        )
    }
}

export default Search
