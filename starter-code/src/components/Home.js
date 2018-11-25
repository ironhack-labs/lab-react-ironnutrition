import React, {Component} from 'react'
import FoodBox from "./FoodBox";
import foods from '../foods'
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import Today from "./Today";

class Home extends Component {
    constructor(){
        super();
        this.state = {
            foods,
            filterdFoods: foods,
            todaysFoods: [],
            totalCalories: 0
        }
    }

    handleAddButton = () => {
        document.querySelector('.modal').classList.add('is-active')
    };
    handleCloseModal = () => {
        document.querySelector('.modal').classList.remove('is-active')
    };
    handleAddFood = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let calories = e.target.calories.value;
        let image = e.target.image.value;
        let newFood = {name,calories,image,quantity:0};
        let {foods} = this.state;
        foods.push(newFood);
        console.log(foods);
        this.setState({foods});
        document.querySelector('.modal').classList.remove('is-active');
    };

    handleSearchBar = (e) => {
        let filter = e.target.value.toLowerCase();
        let {foods} = this.state;
        let filterdFoods = foods.filter(food => {
            return food.name.toLowerCase().includes(filter)
        });
        this.setState({filterdFoods});
    };

   handleAddToday = (e,foodName) => {
        e.preventDefault();
        let quant = parseInt(e.target.quantity.value);
        let {foods, todaysFoods} = this.state;
        let index = foods.findIndex(f => f.name === foodName);
        if (todaysFoods.indexOf(index) === -1 && quant > 0){
            todaysFoods.push(index);
            foods[index].quantity += quant;
        }
       this.setState({foods, todaysFoods});
       this.calculateTotalCalories();
   };

   calculateTotalCalories = () => {
       let total = 0;
       const {todaysFoods, foods} = this.state;
       todaysFoods.forEach(i => {
           total += (foods[i].calories * foods[i].quantity)
       });
       this.setState({totalCalories: total});
   };

   deleteToday = (e ,index) => {
       const {todaysFoods,foods} = this.state;
       foods[index].quantity = 0;
       for (let i = 0; i<todaysFoods.length; i++){
           if(todaysFoods[i] === index){
               todaysFoods.splice(i,1);
           }
       }
       this.setState({todaysFoods, foods});
       this.calculateTotalCalories();
   };

    render(){
        return(
            <div>
                <h1>IronNutrition</h1>
                <SearchBar onchange={this.handleSearchBar}/>
                <Today todaysFoods={this.state.todaysFoods} foods={this.state.foods} totalCalories={this.state.totalCalories} onClick={this.deleteToday}/>
                {this.state.filterdFoods.map((food, index) => <FoodBox key={index} food={food} onSubmit={this.handleAddToday} />)}
                <Modal closeModal={this.handleCloseModal} onSubmit={this.handleAddFood}/>
                <button className="button is-primary" onClick={this.handleAddButton}>Add new food</button>
            </div>
        )
    }
}

export default Home;