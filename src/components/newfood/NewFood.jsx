import React from 'react';
import './NewFood.css';
import 'bulma/css/bulma.css';

const initialState = {
    showForm: false,
    image: "",
    name: "",
    calories: 0,
}

export default class NewFood extends React.Component {
    state = {...initialState}

    onChange = (event) => {
        const { name, value, type } = event.target;
    
        this.setState({
          [name]: type === 'number' ? Number(value) : value,
        });
      };

    toggleShowForm = () => {
        this.setState((prevState) => ({ showForm: !prevState.showForm }))
      }

    onSubmit = (event) => {
        event.preventDefault();
        if (!this.state.name || !this.state.calories || !this.state.image) {
          return
        }
        this.props.onNewFood(this.state);
        this.setState({ ...initialState });
    };

    render() {
        return(
            <div className="NewFood">
                <button onClick={this.toggleShowForm}>Show form</button>
                {this.state.showForm
                    && (
                    <form onSubmit={this.onSubmit}>
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
                    <button type="submit">Add New Food</button>
                    </form>
                    )}
            </div>
        )
    }
}