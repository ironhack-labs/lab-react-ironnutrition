import React from 'react';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';

class App extends React.Component {

  state = {
    food: foods,
    filteredFood: foods,
    // name: '',
    // calories: '',
    // image: '',
    // quantity: 0,
    // copyFoods: foods,
    show: false,
    foodList: {}

}

showFood = () => this.state.filteredFood.map((eachFood, i)=>(
    <FoodBox 
      key={i} 
      {...eachFood}  
      updateFoodList={ this.updateFoodList} />) 
  
).reverse()
  

addNew = (e) => {
  e.preventDefault()
  // console.log(e.target.elements.name.value)
  // console.log(e.target.elements.calories.value)
  // console.log(e.target.elements.image.value)
 let newItem = [...this.state.food] //made a copy of allFoods
 newItem.push({ 
   name: this.state.name, 
   calories: this.state.calories, 
   image: this.state.image 
  }) //pushed our newly typed food into newFoods 
 this.setState({
   filteredFood: newItem,  //update filterFoods with brand new food 
   food: newItem
 })
 
 this.toggleFoodForm() //hide form on submit 
}


//    {name: this.state.name,
//    calories: this.state.calories,
//    image: 'data:image/jpeg;base64,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'
//  }
//  let newFood=[...this.state.food]
//  newFood.unshift(newItem)
//  this.setState({
//    filteredFood:newFood,
//    food:newFood
//  })
//  this.toggleFoodForm() 
// }


// changeQuantity =(e)=>{
// // console.log (e.currentTarget.value)
// this.setState({
// quantity: e.currentTarget.value
//   }
// )
// }
setName = (e) => {
this.setState({
  name: e.target.value
  })
}

setCalories = (e) => {
  this.setState({
    calories: e.target.value
  })
}
setImage = (e) => {
  this.setState({
    image: e.target.value
  })
}
addingFoodToState = (e) => {
  //console.log(e.target.name, e.target.value)
  this.setState({
    [e.target.name]: e.target.value //create dynamic key and add that value 
  })
}

filterFood = (e) => {
  let filteredFood = this.state.food.filter((eachFood)=>{
    return eachFood.name.toLowerCase().includes(e.target.value.toLowerCase())
  })
  this.setState({
    filteredFood
  })
}

toggleFoodForm = () => this.setState({ show: !this.state.show })

updateFoodList=(item)=>{
  console.log(item)
  let foodListCopy = {...this.state.foodList}
    // foodListCopy['hello'] = 'world '+Date.now()
  foodListCopy[ item.name ] = item
  this.setState({
    foodList:foodListCopy
  })
}

showFoodList = () => {
  let foodListCopy = { ...this.state.foodList}
  return Object.keys(foodListCopy).map(function(key) {
    return <li value={key}>
            <span >{foodListCopy[key].name} | </span>
            <span >{foodListCopy[key].calories}| </span>
            <span >{foodListCopy[key].quantity}  </span>
          </li>
  });

}

countTotal = () => {
  let total = 0; 
  let foodListCopy = { ...this.state.foodList }
  for(let key in foodListCopy){
    console.log('key is',key, ' calories is ',foodListCopy[key].calories)
    total += Number( foodListCopy[key].calories )
    //key is "Pizza" calories is foodListCopy["Pizza"].calories 
  }
  
  return total
}


  render() {
    return (
      <div className="App">
      <h1>Iron Nutrition</h1>
      <input name="food" onChange={this.filterFood} type='text' placeholder="Search...."></input>
      <br></br>
      Today's Foods: 
      <br></br>
      {this.showFoodList()}
      <br></br>
      Total: {this.countTotal()}
      <br></br>
      {this.state.newItem}

      {this.state.show ?
            <form onSubmit={this.addNew}>
                <input name="name" type="text" onChange = {this.addingFoodToState} />
                <input name="calories" type="text" onChange = {this.addingFoodToState}/>  
                <input  name="image" type="file" onChange = {this.addingFoodToState}/>
                <button>Submit</button>
            </form>
            :
            <button onClick={this.toggleFoodForm}>Add New Food</button>
      }

       {this.showFood()}
      </div>
    );
  }
}

export default App;
