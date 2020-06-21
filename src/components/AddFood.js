import React, { Component } from 'react';


class AddFood extends Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.setName = this.setName.bind(this);
        this.setImage = this.setImage.bind(this);
        this.setCalories = this.setCalories.bind(this);
    }

    state={
        name:"",
        calories:"",
        image:""
    }

    setName(e){
        this.setState({
            name:e.target.value
        })
    }

    setImage(e){
        this.setState({
            image:e.target.value
        })
    }

    setCalories(e){
        this.setState({
            calories:e.target.value
        })
    }

    submitHandler(e){
        debugger
        e.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name:"",
            image:"",
            calories:""
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="text" value={this.state.name} placeholder="name" onChange={this.setName}/>

                    <label htmlFor="calories">Calories</label>
                    <input type="text" name="calories" value={this.state.calories} placeholder="calories" onChange={this.setCalories}/>

                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" value={this.state.image} placeholder="image" onChange={this.setImage}/>
                    
                    <button type="submit">Add Food</button>
                </form>
            </div>
        );
    }
}


export default AddFood;