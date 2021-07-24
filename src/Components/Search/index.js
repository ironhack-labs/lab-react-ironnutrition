import { Component } from "react";

class Search extends Component{
    state = {
        text:''
    }
    handleSearch = async (event) =>{
        await this.setState({
            text: event.target.value
        })
        this.props.filter(this.state.text)
    }
    render (){
        return(
            
                <input type="text" className="input search-bar" name="search" placeholder="Search" value = {this.state.text} onChange={this.handleSearch} />
        
        )
    }
}

export default Search