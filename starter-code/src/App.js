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
      calories: '',
      image: '',
    },
    showForm: false,
    filterFood:[],
    name:"",
    search:"",
    // caloryFood:[],
    // totalCalories:0,
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

// newfoodsarray = (e) =>{
//     const newfoodsarray = [...this.state.calor];
//     const newfood = {
//       name: this.state.data[e.target.name].name,
//       quantity: this.state.data[e.target.name].quantity,
//       calories:
//         this.state.data[e.target.name].calories *
//         this.state.data[e.target.name].quantity
//     }
//   newfoodsarray.push(newfood);
//     let cals = this.state.totalCalories;
//     cals += caloryFood.calories;
//     this.setState({ caloryFood: newfoodsarray, totalCalories: caloryFood });
//     };

// quantity = e => {
//    const foodsArray = [...this.state.data];
//    foodsArray[e.target.name].quantity = e.target.value;
//    this.setState({ data: foodsArray });
//   };


  render() {
    let {showForm, filterFood, data} = this.state
    let form
    if (showForm) {
      form = (
        <div>
          <input name="name" onChange={this.handleInput} value={this.state.name} />
          <input name="calories" onChange={this.handleInput} value={this.state.calories}/>
          <input name="image" onChange={this.handleInput} value={this.state.image}/>
          <button onClick={this.handleSubmit}>Add</button>
        </div>
      )
    } else { form = null }

    
    return (
      <div>
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
            <FoodBox id={index} image={food.image} name={food.name} calories={food.calories}
            />
          ))
         :
         (filterFood.map((food, index ) => 
          <FoodBox id={index} image={food.image} name={food.name} calories={food.calories}
            />
         ))

        }
        
        <button onClick={this.handleClick}>Add new food</button>
        {form}

{/* sumar calorias */}

        {/* <h2>Today's foods!</h2>
          <br />
          <ul>
            {this.state.todaysFoods.map((item, index) => (
              <li>
                {item.quantity} {item.name} = {item.calories * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: {this.state.totalCalories}</p> */}
        
      </div>
    )
  } 
}


export default App;
