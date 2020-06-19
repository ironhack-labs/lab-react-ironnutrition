import React, { Component } from 'react';

class AddFood extends Component {
    constructor(props){
        super(props);
        this.setName = this.setName.bind(this);
        this.setCalories = this.setCalories.bind(this);
        this.setImage = this.setImage.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

    state = {
        name: "",
        calories: "",
        image: "",
    }

    setName(e){
        this.setState({
            name: e.target.value
        });
    }
    setCalories(e){
        this.setState({
            calories: e.target.value
        });
    }

    setImage(e){
        this.setState({
            image: e.target.value
        });
    }

    submitForm(e){
        e.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: "",
            calories: "",
            image: "",
        })
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input 
                        type="text" onChange={this.setName}
                        value={this.state.name} placeholder="Name of food" name="name" 
                    />
                    <input 
                        type="text" onChange={this.setImage}
                        value={this.state.image} placeholder="Image" name="image" 
                    />
                    <input 
                        type="number" onChange={this.setCalories}
                        value={this.state.calories} placeholder="Calories" name="calories" 
                    />
                    <button type="submit">Add Food</button>

                </form>
            
                
            </div>
        )
    }
}


export default AddFood
