import React, {Component} from 'react';

class SearchBar extends Component {

    inputChangeHandler= (event)=>{
        this.props.findFood(event.target.value);
    };

    render() {
        return (<input 
        className='input is-info' 
        name='serch' 
        type='text' 
        placeholder='What are you looking for?'
        onChange={this.inputChangeHandler}
        />

        ); 
    }

}

export default SearchBar;
