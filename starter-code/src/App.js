import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import Search from './components/Search'
import TotalsCheckout from './components/TotalsCheckout'
import foods from './foods.json'
import { v4 as uuidv4 } from 'uuid';

const newFoods = foods.map(food => {

food['id'] = uuidv4()

return food
})

class App extends Component {

state = {foods:newFoods,
         selectedFoods:newFoods,
         form: false,
         search:'',
         name: '',
         calories: 0,
         image: '',
         quantity: 0,         
        }


handleSearchInput = (e) => {
const selectedFoods = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(e.target.value);
    });
this.setState({
      selectedFoods:selectedFoods,
      search:e.target.value
    });
}

handleInput = (e) => {
  let {name, value} = e.target
    this.setState({[name]: value})
}

addFood = () => {
if (this.state.form === false) {
this.setState({form:true})
}
}

addQuantity = (idx) => {
const arr = [...this.state.selectedFoods]
arr.forEach((food,index) => {
if (idx === food.id) {
food.quantity++
}
})
this.setState({foods: arr})
}

calculateTotal  = () => {
let total = 0
this.state.foods.forEach(food => {
total += food.quantity * food.calories
})
return total
}

handleSubmit = (e) => {
  e.preventDefault()
  const newFoods = [...this.state.foods]
  newFoods.push({
    id: uuidv4(),
    name: this.state.name,
    calories: this.state.calories,
    image: 'http://placekitten.com/100/150',
    quantity: this.state.quantity
  })  
    this.setState({foods:newFoods,
    form:false,
      })
}

deleteFood = (idx) => {
const arr = [...this.state.foods]
arr.forEach((food,index) => {
if (food.id === idx) {
console.log(food)
food.quantity = 0;
}
})
 this.setState({foods:arr})
}


  render() {
    return (
      <div className="App">
         <Search addFood={this.addFood} handleSearchInput={this.handleSearchInput} handleInput={this.handleInput} 
         handleSubmit={this.handleSubmit} form={this.state.form} 
         name={this.state.name} calories={this.state.calories} 
        image={this.state.image} search={this.state.search}/>
          
           <div className='food-container'>
         <div className='food-list'>
     {this.state.selectedFoods.map((food,index)   =>
     ( 
      <FoodBox key={index} id={food.id} name={food.name} calories={food.calories} image={food.image} 
      quantity={food.quantity} handleInput={this.handleInput} addQuantity={this.addQuantity}/>
)
     )
     
     }   
     </div>
<div className='totals-checkout'>

<TotalsCheckout  list={this.state.foods} calculateTotal={this.calculateTotal} deleteFood={this.deleteFood} />
</div>

</div>
      </div>
    );
  }
}

export default App;
