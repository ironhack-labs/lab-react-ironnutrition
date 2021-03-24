import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

export default class App extends Component{

  state = {
    foods:[...foods]
}

render() {
  return (
    this.state.foods.map((food)=>(
      <div key={food.name}>
        <FoodBox {...food}/>
      </div>
    ))
  )
}
 
}
    
   


