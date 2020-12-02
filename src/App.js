import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/FoodBox'

class App extends React.Component {
  
state={
  foods: foods,
  showForm:false,

  name: "",
  calories: 0,
  image: "",
  quantity: 0



}
 handleInput=(event)=>{
   const {name, value}= event.target;
   this.setState({[name]: value})
 }


 handleSubmit=(event)=>{
   event.preventDefault();
   const{name, calories, image, quantity }=this.state;
   const newfood ={name, calories, image, quantity};
   this.setState({
     foods:[newfood, ...this.state.foods],
     showForm: false,
      name: '',
      calories: '',
      image: '',
   })
 };

 toggleForm =()=>{
   this.setState({showForm: true});
 };

 handleSearch=(event)=>{
  const foodsCopy = [...foods];
  const value = event.target.value;
  const filteredFoods = foodsCopy.filter((food)=>{
    if(food.name.toLowerCase().includes(value.toLowerCase())){
      return true
    }else{
      return false
    }
  })
  this.setState({foods:filteredFoods})
}




render(){
  return(
    
        
    <div class="container">
    <h1 class="title">IronNutrition</h1>
    <div>
      <input type="text" class="input search-bar" name="search" placeholder="Search" onChange={this.handleSearch}/>
    </div>
<div class="colum">

<button onClick={this.toggleForm}>Add a new food</button>
{this.state.showForm ? (
  <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="write a name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <label> Calories:</label>
            <input
              type="number"
              placeholder="write a number"
              name="calories"
              value={this.state.calories}
              onChange={this.handleInput}
            />
            <label> Image:</label>
            <input
              type="text"
              placeholder="a url"
              name="image"
              value={this.state.image}
              onChange={this.handleInput}
            />
            <button type="submit">Create a food</button>
          </form>
        ) : null}



  {this.state.foods.map((food,i)=>
  {
    return(
     
      <FoodBox
      Key={i}
      foodType={food.name}
      calories={food.calories}
      image={food.image}/>



    );
  })}
</div>


<div class="column content">
  <h2 class="subtitle">Today´s food</h2>
  <ul>

  </ul>
  <strong>Total:   cal:</strong>

</div>
</div>

  )
}



}

export default App;
