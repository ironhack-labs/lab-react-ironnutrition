import { Component } from "react";
import React from "react";
import Card from "./Card/Card";
import foods from '../foods.json';
import Form from "./Form";
import Search from "./Search";


class FoodBox extends Component {

    state = {
        ifoods: foods,
        status: true,
        filterFood: foods,

    }

    addFood = (foods) => {

        let food = [...this.state.ifoods]
        food.push(foods)
        this.setState({
            ifoods: food,  
            status: !this.state.status      

        })
    }
    openForm = () => {
        this.setState({

            status: !this.state.status
        })
    }

    filterFood = (input) => {
        const filtered = this.state.ifoods.filter(food => {
            return food.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        })
     
            this.setState({
                filterFood: filtered,
                
       
            })
        
        

    }



    render() {
        return (<>
           
            <h1 className = "h1">IronNutrition</h1>


            {!this.state.status ? <Form addFood={this.addFood} />
                : <div className="card-center">
                    <div className = "card-table">
                        <button className="bt-openform" onClick={this.openForm}>AddFood</button>


                        <Search filterFood={this.filterFood} />


                        {this.state.filterFood.map(Element => {
                            return (
                                <Card name={Element.name} image={Element.image} calories={Element.calories} />
                            )
                        })}
                    </div>
                </div>
            }

        </>
        )
    }

}

export default FoodBox;