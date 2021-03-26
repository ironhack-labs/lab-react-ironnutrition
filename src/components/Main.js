import React, { Component }  from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox'


export default class Main extends Component {
    
    state = {
        foods: [...foods],
        modalIsActive: false,
        newName: '',
        newCalories: 0,
        newImage: '',
    }

    openModal = () => {
        this.setState({modalIsActive: true})
    }

    closeModal = () => {
        this.setState({modalIsActive: false})
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    submit = (e) => {

        e.preventDefault();

        // let prevFoods = [...this.state.foods];

        // let newFoods = [...prevFoods, {
        //         "name": this.state.newName,
        //         "calories": this.state.newCalories,
        //         "image": this.state.newImage,
        //         "quantity": 0
        //         }]

        // this.setState({
        //     foods: newFoods,
        //     modalIsActive: false,
        //     newName: '',
        //     newCalories: 0,
        //     newImage: '',
        //     })
        
        this.setState((prevState => {
            return {
            foods: [...prevState.foods, {
                "name": this.state.newName,
                "calories": this.state.newCalories,
                "image": this.state.newImage,
                "quantity": 0
                }],
            modalIsActive: false,
            newName: '',
            newCalories: 0,
            newImage: '',
            }
        }))
    }

    render() {
        return (
        <div className="mb-5">
            <button className="button is-info modal-button mb-3" data-target="modal" aria-haspopup="true" onClick={() => this.openModal()}>Add food</button>
            <div className={ this.state.modalIsActive ? "modal is-active" : "modal" }>
                <div className="modal-background">    
                </div>
                <div className="modal-content">
                    <p className="pb-2">Add food</p>
                    <form onSubmit={this.submit}>
                        <div className="field">
                            <label className="label has-text-white has-text-left">Name</label>
                            <div className="control">
                                <input
                                    className="input"
                                    name="newName"
                                    type="text"
                                    value={this.state.newName}
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-white has-text-left">Calories</label>
                            <div className="control">
                                <input className="input"
                                name="newCalories"
                                type="number"
                                value={this.state.newCalories}
                                onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-white has-text-left">Image</label>
                            <div className="control">
                                <input className="input"
                                    name="newImage"
                                    type="text"
                                    value={this.state.newImage}
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <button className="button is-info">Add food</button>
                    </form>
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