import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import './views/Flex.css'

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import TodayFood from './components/TodayFood';

import foodsJSON from './foods.json';

class App extends React.Component {
  state = {
    foods: foodsJSON,
    searchValue: "",
    todayFoodArr: []
  }

  render() {
    const {searchValue, foods, todayFoodArr} = this.state;

    const lowerSearchValue = searchValue.toLowerCase();
    const filteredProducts = foods.filter(({name}) => 
      name.toLowerCase().startsWith(lowerSearchValue));

    return (
      <div className="App">

        <AddFoodForm 
            addFood={(valueFromForm) => 
              this.setState({foods : [valueFromForm, ...this.state.foods]})}
        />
        
          <Search 
            search={searchValue}
            onSearchValue={(receivedValue) => 
              this.setState({searchValue: receivedValue})}
          />
        <div className="main-content-container">
          <div>
          {filteredProducts.map((food, index) => 
            <FoodBox 
              food={food}
              key={index}
              addTodayFood={(receivedObject) => this.setState({todayFoodArr : [receivedObject, ...todayFoodArr]})
              }
            />
          )}
          </div>

          <TodayFood 
            todayFood={todayFoodArr}
          />
        </div>
      </div>
    );
  }
}

export default App;
