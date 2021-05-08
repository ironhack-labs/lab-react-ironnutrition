import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.props.onChange(event.target.value);
    }

    render(){
        return(
            <div>
                <input type="text" onChange={(e) => (this.onChange(e))}/>
            </div>
        )
    }
}

export default SearchBar;