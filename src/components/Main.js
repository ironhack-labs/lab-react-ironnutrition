import React, { Component }  from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import { v4 as uuidv4 } from 'uuid';


export default class Main extends Component {
 
    state = {
        foods: foods.map((food) => ({ ...food, id: uuidv4() })),
        modalIsActive: false,
        newName: '',
        newCalories: 0,
        newImage: '',
        search: ''
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

    handleSearch = (event) => {
        const target = event.target;
                const value = target.value;

                this.setState({
                search: value
                });
    }

    submit = (e) => {

        e.preventDefault();

        this.setState((prevState => {
            return {
            foods: [{
                "name": this.state.newName,
                "calories": this.state.newCalories,
                "image": this.state.newImage,
                "quantity": 0,
                id: uuidv4(),
                }, ...prevState.foods],
            modalIsActive: false,
            newName: '',
            newCalories: 0,
            newImage: '',
            }
        }))
    }

    onFoodChange = (food) => {
        this.setState((previous) => {
           const index = previous.foods.findIndex((element) => element.id === food.id )
            return {
                foods:[
                    ...previous.foods.slice(0, index),
                    food,
                    ...previous.foods.slice(index + 1)
                ],
            }       
        })                
    }
    
    onRemoveButton = (food) => {
        let item = food.target.id
         this.setState((previous) => {
           const index = previous.foods.findIndex(
             (element) => element.name === item
           );
           return {
             foods: [
               ...previous.foods.slice(0, index),
               { ...previous.foods[index], quantity: 0 },
               ...previous.foods.slice(index + 1),
             ],
           };
         });
    }


    render() {
        return (
          <div className="mb-5">
            <div className="is-flex my-3 searchBox">
              <input
                className="input mr-3"
                type="text"
                placeholder="Search food"
                value={this.state.search}
                onChange={this.handleSearch}
              />
              <button
                className="button is-info modal-button mb-3"
                data-target="modal"
                aria-haspopup="true"
                onClick={() => this.openModal()}
              >
                + Add food
              </button>
            </div>
            <div
              className={this.state.modalIsActive ? 'modal is-active' : 'modal'}
            >
              <div className="modal-background"></div>
              <div className="modal-content">
                <p className="pb-2">Add food</p>
                <form onSubmit={this.submit}>
                  <div className="field">
                    <label className="label has-text-white has-text-left">
                      Name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        name="newName"
                        type="text"
                        value={this.state.newName}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label has-text-white has-text-left">
                      Calories
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        name="newCalories"
                        type="number"
                        value={this.state.newCalories}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label has-text-white has-text-left">
                      Image
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        name="newImage"
                        type="text"
                        value={this.state.newImage}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <button className="button is-info">Add food</button>
                </form>
              </div>
              <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => this.closeModal()}
              ></button>
            </div>
            <div className="is-flex">
              <div className="is-half">
                {this.state.foods
                  .filter((food) =>
                    food.name
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase())
                  )
                  .map((food) => (
                    <div className="FoodBox" key={food.id}>
                      <FoodBox {...food} onChange={this.onFoodChange} />
                    </div>
                  ))}
              </div>
              <div className="todayBox">
                <div className="box p-5">
                  <p className="is-size-4 mb-2">Today's foods:</p>
                  <ul className="mb-5">
                    {this.state.foods
                      .filter((food) => food.quantity > 0)
                      .map((food) => (
                        <li className="is-size-6" key={ food.id }>
                          { food.quantity } { food.name } ={' '}
                          { food.quantity * food.calories} cal{' '}
                          <span onClick={ this.onRemoveButton } id={food.name}>❌</span>
                        </li>
                      ))}
                  </ul>
                  <strong className="is-size-5">
                    Total:{' '}
                    {this.state.foods.reduce(
                      (acc, food) => acc + food.quantity * food.calories,
                      0
                    )}{' '}
                    cal
                  </strong>
                </div>
              </div>
            </div>
          </div>
        );
    }

}