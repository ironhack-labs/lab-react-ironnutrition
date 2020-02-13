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
    }

    addFoodProperty = (e) =>{
        let key   = e.target.name 
        let value = e.target.value
        this.setState({[key]:value}) // Matches the name="something" with the e.target.value
    }
    
    addForms = () => {
        
        if(this.state.foodForm){
            return (
                
                <form onSubmit={(e) => this.props.handleSubmit(this.state,e)}>
                    <input onChange={this.addFoodProperty} name="name" type="text" placeholder="food name"/>
                    <input onChange={this.addFoodProperty} name="calories" type="text" placeholder="calories"/>
                    <input onChange={this.addFoodProperty} name="img" type="text" placeholder="image url"/>
                    <input type="submit"/>
                </form>
            )
        } else {
            return <button onClick={this.foodFormTF}>Add New Food</button>
        }
        
    }
    
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
                            value="1"
                            />
                        </div>
                        <div className="control">
                        <button className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
                </div>
        
        )
    }

    moreFood = (allFood) => {
        let plates = [];
        for (let i=0;i<allFood;i++){
            plates.push(this.addFood(i))
        }
        return plates
    }
    
    render() {
        return (
            <div>

                <h1>IronNutrition</h1>
                <br></br>
                {/* <button onClick={this.addForms}>Add Food</button> */}
                {this.addForms()}
                <br></br>
                {this.moreFood(this.props.foodsProp.length)}
                
            </div>
        );
    }
}

export default FoodBox;
