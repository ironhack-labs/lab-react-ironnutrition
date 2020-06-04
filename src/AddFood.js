import React from "react";
//import foods from './foods.json';

    
class AddFood extends React.Component {


    state = {
        name: "",
        calories: "",
        image:""
    }

        addNameHandler = (event) => {
        let currentInputValue = event.target.value
    
        this.setState({
          name: currentInputValue
        })
      };
    
      addCaloriesHandler = (event) => {
        let currentInputValue = event.target.value
    
        this.setState({
          calories: currentInputValue
        })
      }

      addImageHandler = (event) => {
        let currentInputValue = event.target.value
    
        this.setState({
          image: currentInputValue
        })
      }
    
      formSubmitHandler = (event) => {
        event.preventDefault()
    
        let newFood = this.state
    
        this.props.addFoodHandler(newFood) 
    
        this.setState({
          name: "",
          calories: "",
           image: ""     
        })
    
    }

    render() {


    return (
       
        <div>
        <form onSubmit={this.formSubmitHandler}>
          Name: <input name="name" value={this.state.name} onChange={this.addNameHandler}></input>
        Calories: <input name="calories" value={this.state.calories} onChange={this.addCaloriesHandler}></input>
        Image URL: <input name="image" value={this.state.image} onChange={this.addImageHandler}></input>

          <button type="submit">Save</button>
        </form>
      </div>        
        );
      };
    }

export default AddFood;