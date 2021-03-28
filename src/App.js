import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/Addfood';
import TotalFood from './components/TotalFood';

export default class App extends Component {

  state = {
    foods: [...foods],
    search: '',
    showForm: false
  }

  showForm = () => {
    this.setState({ showForm: true })

  };
  onAddFoodSubmit = (food) => {
    this.setState((old) => ({ foods: [{ ...food, quantity: 0 }, ...old.foods] }))
    this.setState({ showForm: false })

  }
  //en la función handleSearch le pasamos un evento y al cambiar el state le pasaremos el valor del evento
  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  //Si tenemos search filtramos por nombre, pasamos a minuscula y le decimos que nos quedamos conlos que esten lo que haya en el search. Si no hay nos devuelve el listado completo.
  filterFood = () => {
    if (this.state.search) {
      return this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))
    }
    return this.state.foods
  }
  onChangeQuantity = (food) => {
    this.setState((old) => {
      const index = old.foods.findIndex((oldFood) => oldFood.name === food.name);
      return {
        foods: [
          ...old.foods.slice(0, index),
          food,
          ...old.foods.slice(index + 1),
        ],
      };
    });

  }

  render() {//Metemos un input que contenga en el onChange la función anteriormente definida y en el value el search del state
    return (
      <div className='container'>
        <div className="mx-auto mt-5 mb-3" >
          <input
            placeholder="Type for searching..." type="text"
            className="form-control" style={{ width: '40rem', height: '2rem', border: '2px solid blue' }} onChange={this.handleSearch} value={this.state.search}
          />


          <button className="button is-info ml-2" onClick={this.showForm}>
            +
          </button>
        </div>

        {this.state.showForm && <AddFood addFoodSubmit={this.onAddFoodSubmit} />}
        <div className="Album ">
          <div className="columns ">
            <div className="column">
              {// Muy importante......
                //Ahora el map se lo hacemos a la array que nos devuelve el filter............
                this.filterFood().map((food) => (
                  <div key={food.name}>
                    <FoodBox {...food} onChangeQuantity={this.onChangeQuantity} />
                  </div>
                ))
              }
            </div>
            <div className="column">
              <TotalFood foods={this.state.foods} />
            </div>
          </div>
        </div>
      </div>

    )
  }

}




