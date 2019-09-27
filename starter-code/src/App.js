import React, { Component } from 'react';
import FoodBox from './components/FoodBox.js'
import 'bulma/css/bulma.css';
import foods from './foods.json'

import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
              foods:foods,
              vFoods: foods,
              name:'',
              calories:'',
              imageUrl:'',
              show:true,
              search:'',
    }
  
  }


createFood =(e)=>{
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

addFood =(e)=>{
  e.preventDefault()
  let foodsCopy = [...this.state.foods]
  let vFoodsCopy = [...this.state.vFoods];


  let newFood ={
    "name": this.state.name,
    "calories": this.state.calories,
    "image": this.state.imageUrl,
  }

  foodsCopy.unshift(newFood)
  vFoodsCopy.unshift(newFood)

  this.setState({
    foods: foodsCopy,
    vFoods: vFoodsCopy,
    name:'',
    calories:'',
    imageUrl:'',
    show: !this.state.show,
  })
}

printFood =()=>{
  return this.state.vFoods.map((food , index)=>{
    return(
        < FoodBox key={index} food={food}/>
    )
  })
}

toggle=()=>{
  this.setState({
      show: !this.state.show,
  })
}


search=(e)=>{

  this.setState(
    {search: e.target.value},()=>{
      let vFoodsCopy= [...this.state.foods]
      let filteredFoods = vFoodsCopy.filter(food =>
        food.name.toUpperCase().includes(this.state.search.toUpperCase())
      )
    
      this.setState({
        vFoods: filteredFoods,
      })

  })

}

  render() {
    return (
      <div style={{width:'70%', margin:'0 auto'}}className="App">
      <h1 className='title'>IronNutrition</h1>
      <div>
      <h6 style={{textAlign:'left'}}className='title'>Search</h6>
    <input style={{marginBottom:'20px'}} className="input is-info"onChange={this.search} name="search"  value={this.state.search} type="text"/>
    </div>
        <div style={{float:'left', width:'50%'}}>
            {this.printFood()}
        </div>
        <div style={{float:'right', width:'40%'}}>
        {this.state.show && 
        <button className="button is-info"onClick={this.toggle}>Add Food</button>
        }
        {!this.state.show && 
        <form onSubmit={this.addFood}>
                <h4 className="title">New Food</h4>
                <legend> Name</legend>
                <input className="input is-info" onChange={this.createFood} value={this.state.name}type="text" name="name" />
                <legend> Calories</legend>
                <input className="input is-info" onChange={this.createFood} value={this.state.calories}type="number" name="calories" />
                <legend> Image</legend>
                <input className="input is-info" onChange={this.createFood} value={this.state.imageUrl}type="text" name="imageUrl" />
                <div>
                  <button style={{marginTop:'20px'}}className="button is-info">Submit</button>
                </div>
              </form>}
        </div>
      </div>
    );
  }
}

export default App;
