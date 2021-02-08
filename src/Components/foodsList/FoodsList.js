import React, { Component } from 'react';
import FoodBox from '../FoodBox'
import allFoods from './foods.json';
import NewFoodForm from '../NewFoodForm'
import MyFoodItem from '../MyFoodItem'

class FoodsList extends Component {
    
    state = {
        foods: [...allFoods],
        myFoods: [],
        toggle: false,
        input: ""
    }

    handleClick = (name, image, calories, quantity) => { 
        const myFoodsCopy = [...this.state.myFoods]
        const itemExists = myFoodsCopy.some(item => item.name === name)

        if(itemExists) {
            const index = myFoodsCopy.findIndex(item => item.name === name)
            myFoodsCopy[index].quantity = parseInt(quantity)
            this.setState({myFoods: myFoodsCopy})
        } else {
            let newItem = {
                name: name,
                calories: calories,
                image: image,                
                quantity: parseInt(quantity)
            }
            
            myFoodsCopy.push(newItem)
            
            this.setState({myFoods: myFoodsCopy})
        }
    }

    addNewFood = (name, calories, image) => {
        const newItem = {
            name: name,            
            calories: calories,
            image: image,
            quantity: 0
        }
        
        const itemExists = allFoods.some(item => item.name === name)

        if(!itemExists) {
            allFoods.unshift(newItem)
        } 
        this.setState({foods: allFoods, toggle: !this.state.toggle})

    }

    handleToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }


    handleChange = (event) => {

        const filtered = allFoods.filter((item) =>
          item.name.toLowerCase().includes(this.state.input.toLowerCase())
        );
        
        this.setState({
          input: event.target.value,
          foods: filtered,
        });
    }

    deleteMyFood = (name) => {
        const myFoodsCopy = [...this.state.myFoods]
        const index = myFoodsCopy.findIndex((item) => item.name === name);
        myFoodsCopy.splice(index, 1)
        this.setState({myFoods: myFoodsCopy})
    }

    render() {
        console.log(this.state.input)
        return (
        
            <div className='is-flex '>
                
                <div className='column is-half'>            

                {!this.state.toggle && (
                    <div className="control">
                        <button className="button is-info" onClick={this.handleToggle} >Add Food</button>
                    </div>
                )}

                {this.state.toggle && (<NewFoodForm addNewFood={this.addNewFood} handleToggle={this.handleToggle} />)}            

                
                <input className='box column is-full mgt-large mt-3' onKeyUp={this.handleChange} type="text" 
                placeholder="Search for a Food Here" value={this.state.value} />

                {this.state.foods.map((food, i) =>
                    <FoodBox
                        key={i}
                        name={food.name}
                        image={food.image}
                        calories={food.calories}
                        quantity={food.quantity}
                        handleClick={this.handleClick}
                    />
                )}
                </div>
                


                <div className='column is-half pl-6'>
                    <h3 className='title is-3'>Today's Food</h3>
                    
                    <ul>
                        {this.state.myFoods.map((item, i) =>
                        <MyFoodItem 
                            key={i} 
                            id={i}
                            name={item.name}
                            calories={item.calories}
                            quantity={item.quantity}
                            deleteMyFood={this.deleteMyFood}
                        />
                        )}
                    </ul>

                    <h5 className='title is-5 mt-3'>Total: {this.state.myFoods.reduce((acc, item) => acc + (item.calories*item.quantity) ,0 )} cal</h5>
                </div>
            </div>
        );
    }

}

export default FoodsList