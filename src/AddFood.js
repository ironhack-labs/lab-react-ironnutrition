import React, { Component } from 'react';

class AddFood extends Component {
    state={
        name:"",
        calories:0,
        image:""
    }

    addNewFood = (event) =>{
        event.preventDefault();
        this.props.addTheFood(this.state);
    }

    onChangeName(event){        
        this.setState({
            name: event.target.value
        })
    }

    onChangeCalories(event){        
        this.setState({
            calories: event.target.value
        })
    }

    onChangeImage(event){        
        this.setState({
            image: event.target.value
        })
    }

  render() {
    return (
    <form onSubmit={(e)=>this.addNewFood(e)}>
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.onChangeName.bind(this)}></input>
        <label>Numer of calories</label>
        <input type="text" name="calories" value={this.state.calories} onChange={this.onChangeCalories.bind(this)}></input>
        <label>Image</label>
        <input type="text" name="image" value={this.state.image} onChange={this.onChangeImage.bind(this)}></input>
        
        <button>Submit</button>
    </form>
    )
  }
}

export default AddFood;
