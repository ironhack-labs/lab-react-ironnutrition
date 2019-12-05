import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';


class App extends Component {
  state = {
    data: foods, 
    form : {
      name: '',
      calories: 0,
      image: '',
      quantity:0,
    },
    showForm: false,
    filterFood:[],
    search:"",
    totalCalories: 0,
    caloryFood:[],
    
}

handleInput = e => {  
  const { form } = this.state
  const key = e.target.name
  form[key] = e.target.value
  console.log(form)
  this.setState({ form })
}

handleSubmit = e => {
  e.preventDefault()
  let {form} = this.state
  let copyFood = [...this.state.data]
  copyFood.push(form)
  this.setState({data: copyFood, showForm: false})

}
    
handleClick = () => {
  let { showForm } = this.state
  this.setState({showForm: true})
}

filterFood =  ({ target: { name, value } }) => {
  const expr = new RegExp(value, 'ig')
  this.setState({
    ...this.state,
    [name]: value,
    filterFood: this.state.data.filter(food => food.name.match(expr))
  })
}

addCalories = e => {
  const newfoodsarray = [...this.state.caloryFood];
  const newfood = {
    name: this.state.data[e.target.name].name,
    quantity: this.state.data[e.target.name].quantity,
    calories:
      this.state.data[e.target.name].calories * this.quantity
      
  };
    newfoodsarray.push(newfood);
    let cals = this.state.totalCalories;
    cals += newfood.calories;
    this.setState({ caloryFood: newfoodsarray, totalCalories: cals });
};

quantity = e => {
  const foodsArray = [...this.state.data];
  foodsArray[e.target.name].quantity = e.target.value;
  this.setState({ data: foodsArray });
}



  render() {
    let {showForm, filterFood, data,} = this.state
    let form
    if (showForm) {
      form = (
        <div>
          <input name="name" onChange={this.handleInput} value={this.state.name}/>
          <br/>
          <input name="calories" onChange={this.handleInput} value={this.state.calories}/>
          <br/>
          <input name="image" onChange={this.handleInput} value={this.state.image}/>
          <br/>
          <button onClick={this.handleSubmit}>Add</button>
        </div>
      )
    } else { form = null }

    
    return (
      <div>
      <br/>
        <input
          type="text"
          name="search"
          id="search"
          onChange={this.filterFood}
          placeholder="🔍 search"
        />

        {
          this.state.search.length === 0 ?
          (data.map((food, index) => 
            <FoodBox onClick={this.addCalories} onChange={this.quantity} key={index} id={index} image={food.image} name={food.name} calories={food.calories} 
            />
          ))
         :
         (filterFood.map((food, index ) => 
          <FoodBox onClick={this.addCalories} onChange={this.quantity} key={index} id={index} image={food.image} name={food.name} calories={food.calories} 
            />
         ))

        }
       
        <button onClick={this.handleClick}>Add new food</button>
        {form}


        <br/>


        <h2>🍫Today's foods🍩</h2>
  
          <ul>
            {this.state.caloryFood.map((food, index) => (
              <li>
                {food.quantity} {food.name} = {food.calories * food.quantity}
              </li>
            ))}
          </ul>
          <p>Total: {this.state.totalCalories}</p>
        
      </div>
)}
}


export default App;
