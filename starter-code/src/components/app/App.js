import React, { Component } from 'react';
import foods from '../../foods.json';
import FoodBox from '../foodBox/FoodBox';
// import Button from '../button/Button';
import FormFood from '../formFood/FormFood';
import Search from '../search/Search';
import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
   constructor() {
     super();
     this.state = {
      //  form: false,
      foodList: foods,
     }
     this.addOneFood = this.addOneFood.bind(this);
     this.searchFood = this.searchFood.bind(this);
   }

  // showForm() {
  //   this.setState({
  //     form: !this.state.form,
  //     count: this.state.count + 1
  //   })
  //   return this.state.count;
  // }

    addOneFood(newFood){
      const foodsCopy = [...this.state.foodList];
      foodsCopy.push(newFood);
      this.setState({
        foodList: foodsCopy
      })
      console.log(foodsCopy);
    }

    searchFood(searchValue){
      console.log(searchValue.search)
      const foodSearch = foods.filter((el) => el.name.toLowerCase().includes(searchValue.search.toLowerCase()));
      console.log(foodSearch);
      this.setState({
        foodList: foodSearch
      })
    }

  render() {
    return (
      <div className="App">
        {/* <Button onClick={this.showForm} name="Add" className="button is-success" /> */}
        <FormFood fn={this.addOneFood} />
        <Search search={this.searchFood}/>
        <div className="food-row">
        {
          this.state.foodList.map((el, idx) => {
            return <FoodBox name={el.name} calories={el.calories + " Calories"} image={el.image} key={idx} />
          })
        }
        </div>
        <div className="food-display">
          <h2>Today's Foods</h2>
          {/* <FoodDisplay /> */}
        </div>

      </div>
    );
  }
}

export default App;
