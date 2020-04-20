import React, { Component } from 'react';

class AddFood extends Component {
    constructor(props){
        super(props);
        this.state = {
            image:'',
            name:'',
            calories:''
        }
    }

handleImageInput = (event) => {
    this.setState({
        image: event.target.value
    })
}

handleNameInput = (event) => {
    this.setState({
        name: event.target.value
    })
}

handleCaloriesInput = (event) => {
    this.setState({
        calories: event.target.value
    })
}

handleForm = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
        image: '',
        name:'',
        calories:''
    })
}

render(){
    return(

<div>
 <form onSubmit= {this.handleForm}>
    <label>Image</label>
    <input name='image' value={this.state.image} onChange={(event) => this.handleImageInput(event)}></input>

    <label>Name</label>
    <input type='text' name='name' value={this.state.name} onChange={(event) => this.handleNameInput(event)}></input>

    <label>Calories</label>
    <input type='number' name='calories' value={this.state.calories} onChange={(event) => this.handleCaloriesInput(event)}></input>

    <input type="submit" value="Add Food"></input>
 </form>
</div>
)}
    
}

export default AddFood; 