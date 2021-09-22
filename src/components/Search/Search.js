import React, {Component} from "react";
import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: ""
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
        
        this.props.searchFood(value)
    }

    render() { 
        return ( 
            <div class="control search-bar">
                <input class="input" name="text" type="text" placeholder="Text input" onChange={(e)=>this.handleChange(e)} value={this.state.text}/>
            </div>
         );
    }
}
 
export default Search;