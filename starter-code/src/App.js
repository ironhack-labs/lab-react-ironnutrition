import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import Search from './components/Search';
import TodayFood from './components/TodayFood';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      foodsToDisplay: foods,
      clickedItems: [],
    }

  }

  displayFood(oneFood){
    
    let { foodsToDisplay } = this.state;
    console.log("oneFood  : ",oneFood);

    let newFoodToDisplay = [];
    if (oneFood.search == ""){
      newFoodToDisplay = foods;
    } else {
      newFoodToDisplay = foodsToDisplay.filter(el=> {
        return el.name.includes(oneFood.search)
      })
    }
    console.log("newFoodtodisplay:",newFoodToDisplay);
    this.setState({ foodsToDisplay: newFoodToDisplay });

  }

  clickedFood(oneElement){
    console.log("oneElement inside clicked food",oneElement.name);
    console.log("inside clicked food:",this.state);
    
    const {clickedItems} = this.state;
    console.log(clickedItems)
    let newClickedItem = clickedItems;
    newClickedItem.push(oneElement.name);

    this.setState({clickedItems: newClickedItem },
    console.log("after set state clicked",clickedItems))  
  

  }


  render() {
    const {foodsToDisplay, clickedItems, toDisplay} = this.state;
    console.log("in the app: clickedItems: ", clickedItems)
    return (
      <div className="App">


    <Search onSearchType={ (oneFood) => this.displayFood(oneFood) }/>
    <TodayFood clickedItems={clickedItems} />
      <ul> 
        {foodsToDisplay.map((el,index) => { 
           return  <li key={index}>
            <FoodBox
            clickedFood={ (oneFood) => this.clickedFood(oneFood) }   
            name={el.name} 
            calories={el.calories} 
            image={el.image}
            
            />
            </li>
        })}  
      </ul>
      </div>
    );
  }
}

export default App;
