import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json'
import FoodForm from './components/FoodForm'

class App extends Component {

    state = {
        foods:[],
        todayFoods:[],
        food:{},
    }

    componentDidMount() {
        this.setState({foods})
    }
    onAdd = (e) => {
        console.log(e.target)
        /*const food = {
            name:
        }*/

    }
    drawFoodBox = () =>{
        const {foods} = this.state
        return foods.map((box,index) => <FoodBox key={index} indexMap={index} {...box} onAdd={this.onAdd}/>)
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        const {foods,food} = this.state
        //food.quantity = 0
        foods.push(food)
        this.setState({foods})
    }

    onChange = (e) =>{
        const {food} = this.state
        food[e.target.name] = e.target.value
        this.setState({food})
    }
    compare = (element,query) =>{
            if(element.name.toUpperCase().indexOf(query) !== -1) return true
            return false
    }
    onSearch = (e) =>{
        let {foods} = this.state
        const searchQuery = e.target.value.toUpperCase()
        foods = foods.filter(e => this.compare(e,searchQuery))
        console.log(searchQuery.length)
        if(searchQuery.length <1){
            //TODO: return from db
        }
        this.setState({foods})
    }

    render() {
        console.log(this.state)
        const {drawFoodBox,onSubmit,onChange,onSearch} = this
        const {food} = this.state
        return (
          <div className="App">
              <FoodForm onSubmit={onSubmit} onChange={onSearch} {...food}/>
              <input type="text" onChange={onSearch} name="searchBar"/>
            <h1>Iron Nutrition</h1>
            <div>
                {drawFoodBox()}
            </div>
              <FoodBox />
          </div>
        );
  }
}

export default App;
