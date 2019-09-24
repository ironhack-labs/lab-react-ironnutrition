import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './Components/FoodBox'
import Form from './Components/Form';


class App extends React.Component {

  constructor(props){
    super(props);
    
  }

  updateTheValue = (e) => {
    console.log(e)
}

addTheFood = () => {
    let newFoodList = [...]
}

  render(){
    return (
      <div className="App">
      <FoodBox />
      <Form />
      </div>
    );
  }
  
}

export default App;