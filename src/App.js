import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';
import Search from './components/Search/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: foods,
    };
  }

  addFood(food) {
    const copyArray = [...this.state.foodList];
    copyArray.push(food);
    this.setState({foodList: copyArray})
  }

  search(keyword) {
    const filteredArray = foods.filter((food) => {
      return food.name.indexOf(keyword) === 0;
    })
    this.setState({ foodList: filteredArray })

  }

  render() {

    return (
      <div>
        <h1>IronNutrition</h1>
        <Search search={(keyword) => this.search(keyword)}/>
        <Form addFood={(food) => this.addFood(food)}/>
        <div>
          {this.state.foodList.map((food) => {
            return (<FoodBox food={food} />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
