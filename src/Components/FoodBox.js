
import React, { Component } from "react";
import foods from '../foods.json';
import FoodItem from "./FoodItem";

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      foods:foods,
      creating: false,
      name: "",
      calories: "",
      image:"", 
    };
  }

  AddFood() {   
    this.setState({
      creating: true,
    });
  }

  handleChange = (e) =>{
      let { name, value } = e.currentTarget
      this.setState({
          [name] : value
      })
  }

  SubmitFood = (e) => {   
      e.preventDefault();

      this.state.foods.push({name: this.state.name, calories: this.state.calories, image: this.state.image});

     this.setState({
         foods: foods,
         creating:false,
         name: "",
         calories: "",
         image:"", 
     }) 
  }

  filterFood = (e) =>{
    let { value } = e.currentTarget

    let newArrayFood = [...foods]
    newArrayFood = foods.filter((elm)=> value === elm.name.substring(0, value.length))
    console.log(this.state.foods)

    this.setState({
        foods : newArrayFood
    })
}

AddList(elm){
    console.log(elm)
}

  render() {
    return (
        <>
        <form>
            <input onChange={this.filterFood} type="text" name="search"/>
        </form>
        {this.state.creating ? 
            <div>
            <form onSubmit={this.SubmitFood} >
                <label>
                   Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>
                <label>
                Calories: <input onChange={this.handleChange} value={this.state.calories} type="text" name="calories" />
                </label>
                <label>
                    Image: <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
                </label>
                <input type="submit" value="Crear food" />
            </form>
            </div> 
            : 
            <div> 
                <button onClick={() => this.AddFood()}>Add Food</button>
            </div>
        
        }
        
       { this.state.foods.map((elm) => <FoodItem food={elm} />)}
         </>
    );
  }
}
export default FoodBox;





 