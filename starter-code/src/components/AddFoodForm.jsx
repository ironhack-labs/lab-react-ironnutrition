import React, { Component } from 'react';
export default class AddFoodForm extends Component {
    
    constructor(props){
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    state = {
        food: {
            name: "",
            calories: "",
            image: "",
            quantity: 0
        }
    }

    handleInputChange(e) {
        let foodCopy = this.state.food;
        foodCopy[e.target.name] = e.target.value;
        this.setState({food: foodCopy});
    }

    render() {
        return ( 
            <div className="add-food-form">
                 <div className="field">
                    <i className="food-form-close" onClick={this.props.toggleAddFoodFormVisibility} ></i>
                 </div>
                 <div className="field">
                    <div className="control">
                        <input 
                            className="input" type="text" 
                            onChange={this.handleInputChange} 
                            name="name" value={this.state.name} 
                            placeholder="name"
                        />
                    </div>
                 </div>
                 <div className="field">
                    <div className="control">
                        <input className="input" type="text" onChange={this.handleInputChange} name="image" value={this.state.image} placeholder="image"/>
                    </div>
                </div>
                 <div className="field">
                    <div className="control">
                        <input className="input" type="text" onChange={this.handleInputChange} name="calories" value={this.state.calories} placeholder="calories"/>
                    </div>
                </div>
                <button className="button is-primary" onClick={()=> {this.props.addFood({...this.state.food})}}>Add Food</button>
            </div>
        )
    }
}