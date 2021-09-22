import React from 'react';
import foods from '../../foods.json';
import AddFood from '../AddFood/AddFood'

class FoodBox extends React.Component {

    state = {
        foodsList: foods,
        showForm: true
    }


    addFood = (food) => {

        const foodListCopy = [...this.state.foodsList];
        console.log(food)
        foodListCopy.push(food)

        this.setState({
            ...this.state,
            foodsList: foodListCopy
        })
    }

    

    displayFoods = () => {

        return (
            this.state.foodsList.map((elm) => (
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={elm.image} alt='pizza'/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{elm.name}</strong> <br />
                                    <small>{elm.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" onChange={() => {}} value={elm.quantity} />
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
            ))
            
        )
    }

   render (){
       return(
        <div>
               {
                   this.displayFoods()
               }
               <AddFood addFood={this.addFood} />
        </div>


       )
   }
}

export default FoodBox;