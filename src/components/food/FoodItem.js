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

    handleAddUnits() {
        this.setState(({units}) => ({
            units: units +1
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
            <div className="box m-3">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} />
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{name}</strong> <br />
                            <small>{calories}</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" name="quantity" />
                            </div>
                            <div className="control">
                                <form onSubmit={(event) => this.handleSubmitList(event)}>
                                    {/* <input value={name} /><input value={calories} /> */}
                                <button type="submit" className="button is-info">
                                    +
                                </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )}
    }

    FoodItem.defaultProps = {
        onCreateItem: () => {}
    }
    

export default FoodItem
