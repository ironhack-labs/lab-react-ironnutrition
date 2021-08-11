import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            placeholder: 'Search Food'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({value: e.target.value},
            debounce(() => this.props.filterFood(this.state.value), 1000)) //callback // Debounce marche pas trop -_-
    }

    render() {
        return (
            <div>
                <input 
                    className='input' 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder={this.state.placeholder} 
                    value={this.state.value} 
                    onFocus={() => this.setState({placeholder: ''})}
                    onBlur={() => this.setState({placeholder: 'Search Food'})}
                    onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchBar

function debounce(callback, delay){
    var timer;
    return function(){
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}