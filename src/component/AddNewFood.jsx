import React from 'react';
import foods from './../foods.json';

class AddNewFood extends React.Component {
    state = {
        newFoodname: '',
        newFoodCalories: '',
        newFoodImage: ''
    };

    handleFormSubmission = event => {
        event.preventDefault();
        const addNewFood = this.state.state;
        if (addNewFood.newFoodCalories && addNewFood.newFoodname && addNewFood.newFoodImage) {
            this.props.onCreateNewFood(addNewFood);
            this.setState({ 
            newFoodname: '', 
            newFoodCalories: '', 
            newFoodImage: '' 
            });
          }
        };
    
      handleNewFoodAdd = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value,
        });
      };


    render() { 

    return (
        <div className="box">
        <form onSubmit={this.handleFormSubmission}>
            <label>Add your food here</label>
            <br/>
            <input type="text" name="name" placeholder="Food name" 
          onChange={this.handleNewFoodAdd} 
          value={this.state.newFoodName} />
            <input type="text" name="calories" placeholder="Number of calories" 
          onChange={this.handleNewFoodAdd} 
          value={this.state.newFoodCalories} />
            <input type="url" name="image" placeholder="URL image" 
          onChange={this.handleNewFoodAdd} 
          value={this.state.newFoodImage} />
          <button>Add food</button>
        </form>
        </div>
        );
    };
}


export default AddNewFood;