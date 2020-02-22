import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';

const foodList = [...foods]

class App extends Component {
  state = {
    foodList : foodList
  
  }

  render() {
    return (
      <div className="App">
        {/* < FoodBox /> */}
        <section className='display'>
          <div className='foodList'>
            {this.state.foodList.map((item) => <FoodBox key={item} {...item}/>)}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
