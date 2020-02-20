import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import './App.css';
import foods from './foods.json'
import TodayFood from './components/TodayFood'
import Form from './components/Form'
import ShowSelection from './components/ShowSelection';



class App extends Component {
  state ={
    foods:[...foods],
    selectFood: [],
    name: "",
    calories: 0,
    image: "" , 
    display: false   
  }

  handleInputs = e =>{
    const {name, value} =e.target
    
    this.setState({[name]: value})
    
  }

  submitFood = ()=>{
    const newFood ={
      name: this.state.name,
      calories: Number(this.state.calories),
      image: this.state.image,
      quantity: 0
    }

    const newArrFood = this.state.foods.unshift(newFood)
    this.setState ({[foods]: newArrFood})
      
  }

  showForm = () => {
  this.setState ({display: !this.state.display})


  }



  addFood =(name)=>{
   
   const food = this.state.foods.find(food => food.name === name)

   this.setState({selectFood: [...this.state.selectFood, food]})

   console.log(this.state)

  }

  render() {
    return (
      <div className="App">
      <div>
      {this.state.foods.map((food, idx)=>{
        return <FoodBox key={idx}
                name={food.name} 
                calories= {food.calories} 
                image={food.image}
                quantity={food.quantity}
                addFood={this.addFood} 
              />
      })}
      </div>

      <div >
      {this.state.display  && <Form
        value={this.state.value}
        handleInputs={this.handleInputs}
        submitFood={this.submitFood}
      />}

      <button onClick={this.showForm}>Show Form</button>
      
      <TodayFood/>
      <ShowSelection selection={this.state.selectFood}/>
      </div>



      </div>
    );
  }
}

export default App;
