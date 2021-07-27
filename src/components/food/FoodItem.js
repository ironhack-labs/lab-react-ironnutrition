import React, { Component } from "react";
import 'bulma/package.json'
import './food.css'



class FoodItem extends Component {     

    state = {
        food: {
            name: this.props.name,
            calories: this.props.calories ,
            quantity: this.props.quantity
        },
    }

    handleAddUnits(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
           
            food: {
                ...prevState.food,
                [name] : value
            }
        }))
    }


    handleSubmitList(event) {
        event.preventDefault();        
             const { food } = this.state;
             this.props.onCreateListItem(food)
        
     }


    render(){

        const {name, calories, image, quantity} = this.props;

        return (
            <div className="box m-6 columns">
                
                    <div className="column media-left">
                        <figure className="image is-64x64">
                            <img src={image} />
                        </figure>
                    </div>
                    <div className="column media-content">
                        <div className="content">
                            <p>
                            <strong>{name}</strong> <br />
                            <small>{calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="column media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input default-quantity" type="number" name="quantity" min="1" max="100" onChange={(event) => this.handleAddUnits(event)}/> 
                            </div>                            
                        </div>
                    </div>
                    <div className="column media-right">
                    <div className="control">
                                <form onSubmit={(event) => this.handleSubmitList(event)}>
                                <button type="submit" className="button is-info">
                                    +
                                </button>
                                </form>
                            </div>
                    </div>
               
            </div>
        )}
    }

    FoodItem.defaultProps = {
        onCreateListItem: () => {},
        quantity : 0
    }
    


export default FoodItem
