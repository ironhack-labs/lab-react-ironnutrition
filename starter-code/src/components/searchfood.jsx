import React, { Component } from 'react';

class SearchFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input:''
        }
    }

    inputHandler = (e) => {
        console.log(e.target.value)
        //asyc way to do this the state won't change immediately
        // this.setState({
        //     input:e.target.value
        // })
        // console.log(this.state.input)
        this.props.result(e.target.value) 
    }
    render() {
        return (
            <div className='search-from'>
            <label><h1>Search Food</h1></label>
            <input className="input" type="text" name='search' onChange={this.inputHandler}/>
            </div>
        )
    }
}

export default SearchFood;