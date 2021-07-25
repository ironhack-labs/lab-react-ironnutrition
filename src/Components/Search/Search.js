import { Component } from "react";

class Search extends Component{

    state = {
        input: '',
    }

    render(){
        return(
            <input 
            type="text"
            className="input search-bar"
            name="search" 
            placeholder="
            Search" 
            value={this.state.input}
            onChange={(event) => { 
                this.setState({input: event.target.value })
                this.props.filter(this.state.input)  
                }} />
        );
    }
}

export default Search