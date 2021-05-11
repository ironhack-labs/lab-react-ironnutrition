import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import Container from './Container';
import Form from './Form';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
        food: foods,
        isFormVisible: false,
        todaysFoods: [],
    };

    this.newFood = this.newFood.bind(this);
    this.addFoodList = this.addFoodList.bind(this);
  };

  showForm() {
      this.setState({
          isFormVisible: true,
      });
  };

  newFood(e, inputs) {
      e.preventDefault();
      const updatedArray = [...this.state.food];
      updatedArray.push(inputs);
      this.setState({
          food: updatedArray,
          isFormVisible: false,
      });
  };

  addFoodList(item){
      const newTodaysFoods = [...this.state.todaysFoods, item];
      const newFoodObject = {};
      [...newTodaysFoods].forEach((item) => {
          if (!newFoodObject[item.name]) {
              newFoodObject[item.name] = item;
          } else {
              newFoodObject[item.name] = {
                  ...newFoodObject[item.name],
                  quantity: newFoodObject[item.name].quantity + item.quantity,
              };
          }
      });

      this.setState({
          todaysFoods: Object.values(newFoodObject),
      });
  }
  render() {
    return (
        <div>

            <div className={`formBackground ${this.state.isFormVisible ? '' : 'hidden'}`}>
                <div className="formElement">
                    <Form newFood={this.newFood}/>
                </div>
            </div>

            <div>
                <button onClick={() => { this.showForm(this); }}>Add food</button>
            </div>

            <div>
                <div>
                    {this.state.food.map((item) => {
                        return (
                            <Container food={item} addFoodList={this.addFoodList} />
                        )
                    })}
                </div>
                <div>
                    <h2>Food</h2>
                    <ul>
                        {this.state.todaysFoods.map(item => (
                            <li>{item.quantity} {item.name} = {parseInt(item.quantity) * parseInt(item.calories)} calories</li>
                        ))}
                    </ul>
                    <div>Total: {this.state.todaysFoods.reduce((total, item) => (total + (parseInt(item.quantity) * parseInt(item.calories))), 0)} calories</div>
                </div>
            </div>

        </div>
    )
  }

}

export default App;
