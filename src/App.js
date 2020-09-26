import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Food from './components/Food/Food';
import NewFood from './components/NewFood/NewFood';
import Search from './components/Search/Search';
import foods from './foods.json';

export default class App extends React.Component {
  state = {
    foodList: foods,
    showFoodForm: false,
    search: '',
  };

  showNewFoodForm = () => {
    this.setState({ showFoodForm: !this.state.showFoodForm }, () =>
      console.log('this is state', this.state.showFoodForm)
    );
    //console.log is an anonymus function, callback
  };

  // // second option
  // showFoodForm2 = ((previousState, props) =>{
  //     return
  // })

  newFood = (item) => {
    console.log('PREEEE', this.state.foodList);

    this.setState(
      {
        foodList: [...this.state.foodList, item],
        showFoodForm: false,
      },
      () => {
        console.log('PPPOOOOOST', this.state.foodList);
      }
    );
  };

  searchFood = ({ target: { value: search } }) => {
    this.setState({ search });
  };

  render() {
    console.log(this.state.foodList);
    const foodArr = this.state.foodList.filter((el) =>
      el.name
        .toLowerCase()
        .trim()
        .includes(this.state.search.toLowerCase().trim())
    );
    return (
      <div>
        <h1>IronNutrition</h1>
        <div>
          <Search search={this.state.search} onChange={this.searchFood} />
        </div>
        {this.state.showFoodForm ? (
          <NewFood
            newFood={this.newFood}
            showNewFoodForm={this.showNewFoodForm}
          />
        ) : (
          <button onClick={this.showNewFoodForm}>Add New</button>
        )}

        {/* ANOTHER OPTION TO DO THE hide/show
        <button onClick={this.showNewFoodForm}>Add New</button>
        {this.state.isFormDisplayes &&    <NewFood
            updateFoodList={this.updateFood}
            showNewFoodForm={this.showNewFoodForm}
          />} */}

        <Food foodList={foodArr} />
      </div>
    );
  }
}
