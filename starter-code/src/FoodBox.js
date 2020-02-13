import React, { Component } from 'react';

class FoodBox extends Component {
    
    state = {
        foodForm:false,
        name:"",
        calories:"",
        img:""
    }

    foodFormTF = () => {
        this.setState({foodForm:!this.state.foodForm})
    } // Makes foodForm T/F onClick of the submit/add food buttons

    addFoodProperty = (e) =>{
        let key   = e.target.name 
        let value = e.target.value
        this.setState({[key]:value}) // Matches the name="something" with the e.target.name
    } // onChange of the inputs created when Add Food gets clicked, add the inputs .name and .value 
    // as key:value pairs and then sets it to the state.
    
    addForms = () => {
        
        if(this.state.foodForm){
            return (
                
                <form onSubmit={(e) => this.props.handleSubmit(this.state,e)}>
                    <input className= "input is-info" onChange={this.addFoodProperty} name="name" type="text" placeholder="food name"/>
                    <input className= "input is-info" onChange={this.addFoodProperty} name="calories" type="number" placeholder="calories"/>
                    <input className= "input is-info" onChange={this.addFoodProperty} name="img" type="text" placeholder="image url"/>
                    <input className="button is-info" type="submit"/>
                </form>
            )
        } else {
            return <button onClick={this.foodFormTF} className="button is-info is-light">Add New Food</button>;<br></br>
        }
        
    } // onClick creates the fields to properly add food to the state/ or button to do so
    
    addFood = (foodIndex) => {
        return (
            
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.foodsProp[foodIndex].image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.foodsProp[foodIndex].name}</strong> <br />
                        <small>{this.props.foodsProp[foodIndex].calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            className="input"
                            type="number" 
                            value={this.props.foodsProp[foodIndex].quantity}
                            />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={() => this.props.addToList(foodIndex)}>
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
                </div>
        
        )
    } // Returns each food row, takes an index of the specific food obj as a parameter

    moreFood = (allFood) => {
        let foodArr = [];
        for (let i=0;i<allFood;i++){
            foodArr.push(this.addFood(i))
        }
        return foodArr
    } // Creates an array, loops through from i=0 to allFood, which will be foodsProp.length
    // which in this case is the length of all the current objs in the App.js state.food 
    // If allFoods isn't used then we won't go back to the full list of the food, because the result was set to the state of App.js
    // Uses changeQuanity props to add an onclick event

    render() {
        return (
            <div>
                {this.addForms()} 
                <br></br>
                {this.moreFood(this.props.foodsProp.length)}
                
            </div>
        );
    }
}

export default FoodBox;
