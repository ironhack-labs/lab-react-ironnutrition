import React from 'react';
import './NewFood.css';
import 'bulma/css/bulma.css';

export default class NewFood extends React.Component {
    state = {
        name: '',
        calories: '',
        image: ''
    }

    onSubmit = (event) => {
        event.preventDefault();
    }

    // onChange()

    render() {
        return(
            <form className="NewFood" onSubmit={this.onSubmit}>
                <input 
                type="text"
                value={this.state.name}
                onChange={this.onChange}
                name='name'
                />
                <input 
                type="number"
                value={this.state.calories}
                onChange={this.onChange}
                name='calories'
                />
                <input 
                type="text"
                value={this.state.image}
                onChange={this.onChange}
                name='image'
                />
                <button>Submit</button>
            </form>
        )
    }
}