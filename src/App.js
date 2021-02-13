import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';


const initialState = {
  search: "",

};

function App() {

  const [foodsState, setFoodsState] = React.useState(foods);

  const [foodSearch, setFoodSearch] = React.useState(initialState);
  //console.log(foods)
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <SearchBar foodSearch= {foodSearch} setFoodSearch= {setFoodSearch}/>
      
      <div className="columns">
        <div className="column">
          <FoodList foodsState= {foodsState} setFoodsState= {setFoodsState} foodSearch={foodSearch}/>
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
          
        </div>
      </div>
    </div>
  );
}

function FoodList(props) {

  const foodSearch = props.foodsState.filter(value => value.name.includes(props.foodSearch.search))


  if(props.foodSearch.search===""){
    return <> {props.foodsState.map((value, index) => 
    
      (<FoodBox {...value} key={value.name}></FoodBox>))
    }
      
  
    )
      <Button setFoodsState = {props.setFoodsState}/>
    </>
  }else{

    return <> {foodSearch.map((value, index) => 
    
      (<FoodBox {...value} key={value.name}></FoodBox>))
    }
      
  
    )
      <Button setFoodsState = {props.setFoodsState}/>
    </>

  }

  
}

export default App;
