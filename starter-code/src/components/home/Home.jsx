import React, {Component} from 'react'
import foodsArr from './foods.json'
import FoodBox from './FoodBox'
import Form from './Form'

class Home extends Component{
  
  state = {
            foods:foodsArr,
            showForm: false,
            newFood:{ name:'', calories:'', image:'' }
          }

  toggleForm = () => {
    let { showForm } = this.state
    showForm = !showForm;
    this.setState({ showForm })
  }

  handleSubmit = e => {
            e.preventDefault();
            // console.log(e.target);
            // //1.- creamos la promo
            const foodToAdd = {
               name: e.target.name.value,
               calories: e.target.calories.value,
               image: e.target.image.value
             }
            //2.- la agregamos al state
            const { foods, newFood } = this.state
            newFood.name = foodToAdd.name
            newFood.calories = foodToAdd.calories
            newFood.image = foodToAdd.image
            foods.unshift(newFood)
            this.setState({ foods })
          }

  onChange = e => {
            const value = e.target.value;
            const field = e.target.name;
            const { newFood } = this.state;
            newFood[field] = value;
            this.setState({ newFood });
          }

  render(){
    const { foods, showForm } = this.state;
    return(
      <div>
        <h1>IronNutrition</h1>
        <button onClick={this.toggleForm} className="promo-button"> {showForm ? "Cancelar" : "Agrega una promo"}</button>
        {showForm && (<Form onChange={this.onChange} handleSubmit={this.handleSubmit}/>)}
        {this.state.foods.map((food,index)=><FoodBox key={index} {...food}/>) }
      </div>
    )
  }

}

export default Home