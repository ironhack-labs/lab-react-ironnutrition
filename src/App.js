import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from './foods.json';
import { v4 as uuidv4 } from 'uuid';
import FoodList from './Components/FoodList/FoodList';
import Navbar from './Components/Misc/Navbar/Navbar';


class App extends Component {
  state = {
    foods: [...foods],
    // id: uuidv4()
   
  }


  render() {
    const { foods } = this.state

    return (
      <div className='App'>
        <Navbar />
        <div className="columns">
          <div className='column'>
            <FoodList foods={foods} />
           
          </div>
          <div className='column'>


          </div>
        </div>
      </div>
    )
  }
}
export default App