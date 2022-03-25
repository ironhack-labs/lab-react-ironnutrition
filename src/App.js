import React, { Component }  from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox/FoodBox';
import NewForm from './components/NewForm/NewForm';
import foods from './foods.json'
import './assets/styles/general.scss'
import './App.scss';


class App extends Component {
  state = {
    foods: [...foods],
    showForm: false
  }

  showForm = () => {
    (this.state.showForm === false ?
      this.setState({
        showForm: true
      })
      :
      (
        this.setState({
          showForm: false
        })
      )
      )   
  }

  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4()
    }

    this.setState({ foods: [newFood, ...this.state.foods] })
  }


  render() {
    const { foods, showForm } = this.state
    
    return (
      <div className="wrapper">
        <div>
          <button onClick={this.showForm}>Add new food</button>
            {showForm &&  <NewForm onAddFood={this.onAddFood} />}
        </div>
        
        <div>
        
          <FoodBox foods={foods} />
        </div>
        
      </div>
    )
  }
}


export default App;
