import { render } from '@testing-library/react';
import React, {Component} from 'react';

export default class Search extends Component {
    state = {
        input: ''
    
}

handleChange = (e) => {
    this.props.filterFood(e.target.value)
    this.setState({
        input: e.target.value
    })
}

render() {
    return <div>
        <input
        type='text'
        className='input'
        placeholder='search...'
        calue={this.state.input}
        onChange={this.handleChange}
        />
    </div>
   }
}