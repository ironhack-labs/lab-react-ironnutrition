import React from 'react';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input className="input" type="text" placeholder="Text input" onChange={this.props.searchTheFood} name="foodToSearch"/>
            </div>
        )
    }
}

export default SearchBar;