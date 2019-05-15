import React, {Component} from "react";


class Search extends Component {
    render(){
        return(
            <div>
                <input type="search" onChange={this.props.filter} />
            </div>
        )
    }
}

export default Search; 

