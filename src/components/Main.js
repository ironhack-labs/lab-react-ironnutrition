import React, { Component }  from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox'


export default class Main extends Component {
    
    state = {
        foods: [...foods]
    }

    foods = this.state.foods

    openModal = () => {
    
        let buttonBtn = document.getElementById('modalBtn')
        buttonBtn.classList.add("is-active");
    }

    closeModal = () => {
    
        let buttonBtn = document.getElementById('modalBtn')
        buttonBtn.classList.remove("is-active");
    }

    addFood = () => {
        let foodName = document.getElementById('inputName').value
        let foodCalories = document.getElementById('inputCalories').value
        let foodImage = document.getElementById('inputImage').value

        this.setState( (prev) => ({
            foods: [...prev.foods,{
                "name": foodName,
                "calories": foodCalories,
                "image": foodImage,
                "quantity": 0
                }]
        }))
        console.log(this.state.foods)
        let buttonBtn = document.getElementById('modalBtn')
        buttonBtn.classList.remove("is-active");
    }

    render() {
        return (
        <div>
            <button className="button is-info modal-button" data-target="modal" aria-haspopup="true" onClick={() => this.openModal()}>Add food</button>
            <div id="modalBtn" className="modal">
                <div className="modal-background">    
                </div>
                <div className="modal-content">
                    <p className="pb-2">Add food</p>
                    <div className="field">
                        <label className="label has-text-white has-text-left">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Food name" id="inputName"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white has-text-left">Calories</label>
                        <div className="control">
                            <input className="input" type="number" placeholder="Calories" id="inputCalories"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white has-text-left">Image</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Image url" id="inputImage"/>
                        </div>
                    </div>
                    <button className="button is-info modal-button" data-target="modal" onClick={() => this.addFood()}>Add food</button>

                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => this.closeModal()}></button>
            </div>
            <div>
                {foods.map(food => (
                  <div className="FoodBox" key={food.name}>
                    <FoodBox {...food} />
                  </div>
                ))}
            </div>
        </div>
        )
    }

}