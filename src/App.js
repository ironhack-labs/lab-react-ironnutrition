import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateFoodForm from './Components/CreateFoodForm/CreateFoodForm';


class App extends Component {


  state = {
    foods: [...foods],
    formStatus: false,
    search:'' 
  }
  
  setFormStatus = () => {
    this.setState({formStatus : !this.formStatus});
  }
 

  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4()  
    }

    this.setState ({foods: [newFood,...this.state.foods],
                    formStatus: false
                  })

  }

  
  render(){
    const { foods, formStatus } =this.state
    
    return (
    
      <div className="App">
        <h1 className='title'>Iron Nutrition</h1>
        <div>
          
        {formStatus ? 
          <CreateFoodForm onAddFood={this.onAddFood}/>
          : <button onClick={this.setFormStatus}
            className="button is-info"
          > add New Dish
          </button>    
        }
        
        </div>
        <div style={{width:500}} className='mx-4 mt-5'>
             <FoodBox foods={foods} />
        </div>
      </div>
    )
  }
}

export default App;
