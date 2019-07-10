import React, { Component } from 'react'

// ------- importing components ------- 
import PizzaCard from './PizzaCard'
import foods from './../foods.json'
import AddFood from './AddFood'
import SearchFood from './SearchFood'
import Menu from './Menu'

export default class PizzaContainer extends Component {

    state = {
        allFood: foods,
        value : foods,
        displayForm: false,
        menu: "",
    }

    HandleDisplayForm = () =>{
        this.setState({displayForm: !this.state.displayForm})

    }

    HandleAddFood = (theFood) =>{
        const foodCopy=[...this.state.value]
        foodCopy.push(theFood)
        this.setState({
            value : foodCopy,
            displayForm: !this.state.displayForm})

    }


    filterFood(foodName){
        let currentList=[];
        let filtered = [];
        if (foodName !== "") {
            currentList = [...this.state.value];
            const newItem=foodName.toLowerCase()
            filtered=currentList.filter(item =>{
                const lc=item.name.toLowerCase()
                return lc.includes(newItem)})
        }
        else{
            filtered= this.state.allFoods;
        }
        return filtered

    }


    HandleSearchFood = (foodName) =>{
        let filtered= this.filterFood(foodName)
        this.setState(
            {
                allFoods: foods,
                value: filtered,
                displayForm: !this.state.displayForm
            }
        )
    }

    HandleAddQuantity = (index) =>{
        let foods=[...this.state.value]
        foods[index].quantity +=1; 
        console.log(foods)
        this.setState({value: foods})
    }

    HandleDelete = (index) =>{
        let foods=[...this.state.value]
        foods.splice(index, 1)
        this.setState( {value: foods})
    }

    render() {
        return (
            <React.Fragment> 

                <SearchFood  filterFood={this.HandleSearchFood}/>

                {this.state.displayForm && <AddFood addTheFood={this.HandleAddFood}/>}
                <div className="button">
                    <button className="add-food" onClick={this.HandleDisplayForm}>Add new food </button>
                </div>

                <div className="food-info columns">
                    <div className="pizza-container column">
                        {this.state.value.map( (item, index ) => 
                            (<PizzaCard
                                key={index}
                                index={index}
                                image={item.image}
                                name={item.name}
                                calories={item.calories}
                                quantity={item.quantity}
                                clbk1={this.HandleAddQuantity}
                                clbk2={this.HandleDelete}
                            />)
                        )}
                    </div>
                    <Menu selectedFood={this.state.value} />
                </div>
            </React.Fragment>
        )
    }
}
