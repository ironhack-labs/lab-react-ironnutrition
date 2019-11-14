import React from 'react';
import './new-food.css';

class NewFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newFood: {
                "name":"",
                "calories":"",
                "image":"",
                "quantity":0
            },
            newFoodName:"",
            newCalories:"",
            newImageUrl:""
        }
    }
    submitForm = (e) => {
        e.preventDefault();
        let newFoodObj = {...this.state.newFood};
        newFoodObj.name = this.state.newFoodName;
        newFoodObj.calories = this.state.newCalories;
        newFoodObj.image = this.state.newImageUrl;
        newFoodObj.quantity = 0;
        this.state.newFood = newFoodObj;
        this.setState({
            newFood: this.state.newFood
        });
        this.props.addNewFood(this.state.newFood);
        this.props.addFood();
    }
    updateValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
return (
   <div className="form-section" >
       <form onSubmit={this.submitForm}>
       <h3>Food Form</h3>
       <div className="field-group">
         <div className="fields">
           <label htmlFor="newFoodName">Name</label>
           <input type="text"
                  name="newFoodName"
                  value={this.state.newFoodName}
                  onChange={this.updateValue}
                  placeholder="Enter food name"
                  />
         </div>
         <div className="fields">
           <label htmlFor="newCalories">Calories</label>
           <input type="text"
                  name="newCalories"
                  value={this.state.newCalories}
                  onChange={this.updateValue}
                  placeholder="Enter calories"
                  />
         </div>
         <div className="fields">
           <label htmlFor="newImageUrl">Image</label>
           <input type="text"
                  name="newImageUrl"
                  value={this.state.newImageUrl}
                  onChange={this.updateValue}
                  placeholder="Enter the image url"
                  />
         </div>
       </div>
       <div className="submit">
           <input type="submit" onClick={this.submitForm} value="Submit"/>
       </div>
       </form>
      
   </div>
   
)
    }
}
export default NewFood;