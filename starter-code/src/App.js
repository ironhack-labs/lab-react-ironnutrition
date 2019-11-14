import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json'
import FoodBox from './FoodBox'
import ReactSearchBox from 'react-search-box'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: foodsJson,
      newFood: null,
      newFoodName: "",
      newFoodCalories: "",
      newFoodImage: "",
      formShowing: false,
      viewableFoods: foodsJson,
      search: "",
      addedFoods: [],
      quantity: 0,
      totalCalories: 0,
    };
  }

  updateInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setSearch = (e) => {
    this.setState({ 'search': e.target.value });
    let filteredFoods = foodsJson.filter(eachFood =>{
      return eachFood.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      viewableFoods: filteredFoods
    })
  };


  showFoods = () => {
    return this.state.viewableFoods.map((eachFood, i) => {
      return (
        <FoodBox key={i}
          name={eachFood.name}
          image={eachFood.image}
          calories={eachFood.calories}
          add={this.addFoodToList}
        />
      );
    });
  };


  getFood = (e, foodName, foodCalories, foodImage) => {
    e.preventDefault();

    let theNewFood = { name: foodName, calories: foodCalories, image: foodImage };
    this.setState({
      viewableFoods: foodsJson,
      formShowing: false,
      newFood: theNewFood
    });
    // console.log(foodName, foodCalories, foodImage);

    let newList = [...this.state.viewableFoods]

    

    newList.unshift({
      name: foodName,
      calories: foodCalories,
      image: foodImage,
      quantity: 0,
    })

    // console.log(newList)

    this.setState({
      viewableFoods: newList
    })

  


  };


  addFoodToList = (e, foodName, foodCalories, foodQuantity) => {
    e.preventDefault();
    let foodToBeAdded = {name: foodName, calories: foodCalories, quantity: foodQuantity}

    let newList = [...this.state.addedFoods]
    // make a clone
    // push into the clone

    newList.push(foodToBeAdded)
  
    this.setState({
      addedFoods: newList
    })
  }

  generateList = ()=> {
      return this.state.addedFoods.map((item, i)=>(
        <li key={i}>
          {item.quantity} {item.name} {item.calories * item.quantity} cal
        </li>
      )
  )
}
  
  calculateTotalCalories = () => {
    let theListOfFoodsArray = [...this.state.addedFoods];

    let caloriesArray = theListOfFoodsArray.map((item, i)=> item.calories);

    let quantityArray = theListOfFoodsArray.map((item, i )=> item.quantity)
 
    let  arrSum =(arr)=> {
   
      return arr.reduce((a,b)=>{
        return (a + (b.calories * Number(b.quantity)))
      }, 0);
    }
    
    
  

    
    return (
      <li> 
       <strong> {arrSum(theListOfFoodsArray)} Total calories today</strong>
        </li>
      )
  }    

  toggleForm = () => {
    this.setState({ formShowing: !this.state.formShowing });
  };

  theForm = () => {
    return (
      <div>
        {this.state.formShowing && (
          <form
            className="theForm"
            onSubmit={e => {
              this.getFood(e, this.state.newFoodName, this.state.newFoodCalories, this.state.newFoodImage);
            }}
          >
            <div className='theForm1'>
            <input
              placeholder='Food name'
              className="formInput"
              type="text"
              value={this.state.newFoodName}
              name="newFoodName"
              onChange={this.updateInput}
            />
           
            <input
              placeholder='calories'
              className="formInput"
              type="text"
              value={this.state.newFoodCalories}
              name="newFoodCalories"
              onChange={this.updateInput}
            />
            </div>
       
            <div className='theForm2'>
           
            <input
              placeholder='Image Link'
              className="formInput"
              type="text"
              value={this.state.newFoodImage}
              name="newFoodImage"
              onChange={this.updateInput}
            />
          
            <br />
           
            <button className="submit">Add</button>
            </div>
          </form>
        )}
      </div>
    );
  };




  



  render() {
    return (
      <div>
        <section>
          <div className="App">
        
            <input className='searchBar' type ='text' name='search' placeholder='  Search for food' onChange={this.setSearch}></input>
            <div className="absolute">
              <button onClick={this.toggleForm} className="displayFormBttn">
                <strong>ADD FOOD</strong>
              </button>
              <div>{this.theForm()}</div>
            </div>
            <div>{this.showFoods()}</div>
          <div className='foodList'>
          <h1 className='foodListH1'> Today's Food</h1>
          <ul>
            {this.generateList()}
            <br/>
           
            {this.calculateTotalCalories()}
          </ul>
          </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
