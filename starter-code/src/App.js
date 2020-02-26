import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import food from './foods.json'
import FoodBox from './components/foodBox/FoodBox'
import Search from './components/Search/Search'
import AddFood from './components/AddFood/AddFood'
import ListFood from './components/ListFood/ListFood'


class App extends Component {
  constructor() {
    super()
    this.state = {
      food:food,
      filter:"",
      formAppears:false,
      list: []
    }
  }

setFilter=info=>{
  this.setState({filter: info})
}
formAppears=()=>{
  this.setState({formAppears: !this.state.formAppears})
}

createFood = newFood => {
  let newArrayFood = [...this.state.food]
  newArrayFood.push(newFood)
  this.setState({food: newArrayFood }, ()=>this.setState({formAppears: false}))
}

addNewList=newList=>{
  let arr= [...this.state.list]
  arr.push(newList)
  this.setState({list: arr})
}

  render() {

    const filteredFood = this.state.food.filter(elm => elm.name.includes(this.state.filter))
    return (
      <div>
      <Search setFilter={this.setFilter}></Search>

      <button onClick={this.formAppears}>Add New Food</button>

      {this.state.formAppears&& <AddFood createFood={this.createFood}></AddFood>}

      <ul>
        {this.state.list.map((elm, idx)=><ListFood key={idx} {...elm}></ListFood>)}

        {(!this.state.formAppears && this.state.list[0])&& <p>Total on calories: </p>} {(!this.state.formAppears && this.state.list[0]) && this.state.list.reduce((acc,sum)=>acc+ sum.quantity*sum.calories,0)}
      </ul>




      {/*Resulta que si guardas el key como idx funciona mal (suponemos que por un funcionamiento interno*/}
        {!this.state.formAppears && filteredFood.map((elm) => <FoodBox addNewList={this.addNewList} key={elm.name} {...elm}></FoodBox>)}
      </div>
      
    )
  }
}

export default App;
