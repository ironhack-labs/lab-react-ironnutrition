import React, {Component} from 'react'
import FoodBox from "./FoodBox";
import foods from '../foods'
import Modal from "./Modal";

class Home extends Component {
    constructor(){
        super();
        this.state = {foods}
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
        let newFood = {name,calories,image};
        let {foods} = this.state;
        foods.push(newFood);
        console.log(foods);
        this.setState({foods});
        document.querySelector('.modal').classList.remove('is-active');
    };

    handleChangeQuantity = (e,key) => {
        let {foods} = this.state;
        console.log(e.target);
        //foods[key].quantity = e.target.value;
        //console.log(foods);
        //this.setState({foods});
    };

    render(){
        return(
            <div>
                {this.state.foods.map((food, index) => <FoodBox key={index} food={food} onChange={this.handleChangeQuantity}/>)}
                <Modal closeModal={this.handleCloseModal} onSubmit={this.handleAddFood}/>
                <button className="button is-primary" onClick={this.handleAddButton}>Add new food</button>
            </div>
        )
    }
}

export default Home;