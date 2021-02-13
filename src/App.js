import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import OrderList from './components/OrderList/OrderList';

const initialState = {
  search: "",

};

const initialOrder = [];

function App() {

  const [foodsState, setFoodsState] = React.useState(foods);

  const [foodSearch, setFoodSearch] = React.useState(initialState);

  const [foodOrder, setFoodOrder] = React.useState(initialOrder);
  console.log("foodOrderApp",foodOrder)
  
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <SearchBar foodSearch= {foodSearch} setFoodSearch= {setFoodSearch}/>
      
      <div className="columns">
        <div className="column">
          <FoodList foodsState= {foodsState} setFoodsState= {setFoodsState} foodSearch={foodSearch} setFoodOrder= {setFoodOrder} foodOrder = {foodOrder}/>
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <OrderList foodOrder = {foodOrder}/>
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
    
      (<FoodBox {...value} key={value.name} setFoodOrder= {props.setFoodOrder} foodOrder = {props.foodOrder}></FoodBox>))
    }
      
  
    
      <Button setFoodsState = {props.setFoodsState}/>
    </>
  }else{

    return <> {foodSearch.map((value, index) => 
    
      (<FoodBox {...value} key={value.name} setFoodOrder= {props.setFoodOrder} foodOrder = {props.foodOrder}></FoodBox>))
    }
      
  
    )
      <Button setFoodsState = {props.setFoodsState}/>
    </>

  }

  
}

export default App;
