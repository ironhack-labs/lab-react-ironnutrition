import React, { Component }  from 'react';
import 'bulma/css/bulma.css';


class AddFood extends Component {
    state = {
        name: "",
        calories: "",
        image: "",
    };

    handleChange = (event) => {
        let { name, value, type } = event.target;
        this.setState({
            [name]: value,
        });
    };      
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: "",
            calories: "",
            image: "",
        });
    };
    

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                <label>Food:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        
                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />
        
                <label>Image:</label>
                <input type="text" name="image" checked={this.state.image} onChange={this.handleChange} />
              
                <button type='submit' className="button is-info">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFood;