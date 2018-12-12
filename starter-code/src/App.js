import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json'
import FoodForm from './components/FoodForm'

class App extends Component {

    state = {
        foods:[],
        food:{},
    }

    componentDidMount() {
        this.setState({foods})
    }

    drawFoodBox = () =>{
        const {foods} = this.state
        return foods.map((box,index) => <FoodBox key={index} {...box}/>)
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        const {foods,food} = this.state
        foods.push(food)
        this.setState({foods})
    }

    onChange = (e) =>{
        const {food} = this.state
        food[e.target.name] = e.target.value
        this.setState({food})
    }

    render() {
        console.log(this.state)
        const {drawFoodBox,onSubmit,onChange} = this
        const {food} = this.state
        return (
          <div className="App">
              <FoodForm onSubmit={onSubmit} onChange={onChange} {...food}/>
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
