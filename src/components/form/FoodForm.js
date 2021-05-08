import React from 'react';
import './FoodForm.css';

class FoodForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.addFood(this.state);
        
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        })  
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input name="name" className="input" type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input name="calories" className="input" type="number" placeholder="Calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input name="image" className="input" type="text" placeholder="Image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Quantity</label>
                    <div className="control">
                        <input name="quantity" className="input" type="number" placeholder="Quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />
                    </div>
                </div>
                <button className="button">Submit</button>
            </form>
        );
    }
}

export default FoodForm;
