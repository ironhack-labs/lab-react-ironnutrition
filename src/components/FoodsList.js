import React, { Component } from 'react';

import FoodBox from './FoodBox';
import FoodAddForm from './FoodAddForm';
import 'bulma/css/bulma.css';

class FoodsList extends Component {
  /*
    state of the class
  */
  state = {
    foodList: this.props.foodItems,
    srchFoodKey: '',
    todaysFoodList: [],
  };

  /** */
  searchEventHdlr = (evt) => {
    this.setState({ foodList: this.props.foodItems }, this.updateSrchKey(evt));
  };

  /** */
  updateSrchKey = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value }, this.updateSrchRes);
    console.log(
      'FoodsList->searchEventHdlr()->state data: ',
      this.state.srchFoodKey
    );
  };

  /** */
  updateSrchRes = () => {
    console.log('before search foodlist: ', this.state.foodList);

    const searchRes =
      this.state.srchFoodKey.toLowerCase().trim().length > 0
        ? this.state.foodList.filter((food) =>
            food.name
              .toLowerCase()
              .trim()
              .includes(this.state.srchFoodKey.toLowerCase().trim())
          )
        : this.props.foodItems;

    console.log('search result:', searchRes);
    this.setState({ foodList: searchRes });
  };

  /**
   * add food item clcked
   */
  showNewFoodItemForm = () => {
    console.log(' FoodList -> showNewFoodItemForm ...', this.state);
    this.props.toggleShowList(false);
  };

  updateTodayFood = (id) => {
    const foodChanged = this.state.foodList[id];
    const isFoodFound = this.state.todaysFoodList.find(
      (food) => food.name === foodChanged.name
    );
    let updatedList = [];
    if (isFoodFound) {
      updatedList = this.state.todaysFoodList.map((food) => {
        if (food.name === foodChanged.name) {
          food.quantity =
            parseInt(foodChanged.quantity) + parseInt(food.quantity);
        }
        return food;
      });
    } else {
      updatedList = this.state.todaysFoodList.concat(foodChanged);
    }
    this.setState({
      todaysFoodList: updatedList,
    });
  };

  // updateTodayFood = (id) => {
  //   console.log(' FoodList -> updateTodayFood ...', id);
  //   this.setState({
  //     todaysFoodList: this.state.todaysFoodList.concat(this.state.foodList[id]),
  //   });
  // };

  updateQty = (qty, id) => {
    console.log(' FoodList -> updateQty ...', qty, id);
    this.state.foodList[id].quantity = qty;
    this.setState({
      foodList: this.state.foodList,
    });
  };

  delFoodFromToday = (id) => {
    this.setState({
      todaysFoodList: this.state.todaysFoodList.filter(
        (food, idx) => id != idx
      ),
    });
  };

  /*
   render() 
  */
  render() {
    console.log('FoodList=>render() -> state data: ', this.state);

    return (
      <div className="App">
        <h1 className="App-header"> Iron Nutrition </h1>
        <div>
          <button onClick={this.showNewFoodItemForm}> Add Food </button>
        </div>
        <div>
          <input
            type="text "
            name="srchFoodKey"
            onChange={(evt) => this.searchEventHdlr(evt)}
            placeholder="Seacrh Food"
            defaultValue={this.state.srchFoodKey}
          />
        </div>
        <div className="foodList">
          {this.state.foodList.map((food, idx) => (
            <FoodBox
              key={idx.toString()}
              id={idx.toString()}
              name={food.name}
              calories={food.calories}
              picture={food.image}
              qty={food.quantity}
              updateTodayFood={() => this.updateTodayFood(idx)}
              updateQty={(qty, id) => this.updateQty(qty, id)}
            />
          ))}
        </div>
        {this.state.todaysFoodList.length > 0 ? (
          <div>
            <h3> Today's Food List: </h3>
            <ul className="today-list"></ul>
            {this.state.todaysFoodList.map((food, idx) => (
              <li>
                {food.quantity} - {food.name}- {food.calories} cal
                <span>
                  <button onClick={() => this.delFoodFromToday(idx)}>
                    {' '}
                    Del{' '}
                  </button>
                </span>
              </li>
            ))}
            <p>
              Tot:
              {this.state.todaysFoodList.reduce(
                (tot, food) => tot + food.calories,
                0
              )}
              cal
            </p>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
}

export default FoodsList;
