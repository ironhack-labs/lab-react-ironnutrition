import React from 'react';
import './App.css';
import fileFoods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import Search from './Components/Search/Search';
import List from './Components/List/List';

class App extends React.Component {
  state = {
    foods: fileFoods,
    filteredFoods: fileFoods,
    isFormActive: false,
    newFood: { quantity: 0 },
    todayFoods: []
  };

  render() {
    return (
      <div className="App" >

        <Search searchMethod={this.filterFoods} />

        <button className="button" onClick={() => this.openCloseAddFoodModal()}>Add food</button>
        <div className={'modal ' + (this.state.isFormActive ? 'is-active' : '')}>
          <div className="modal-background"></div>
          <div className="modal-content form-add-food">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" onChange={e => this.onChangeField(e, 'name')} />
              </div>
            </div>
            <div className="field">
              <label className="label">Number of calories</label>
              <div className="control">
                <input className="input" type="text" onChange={e => this.onChangeField(e, 'calories')} />
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input className="input" type="text" onChange={e => this.onChangeField(e, 'image')} />
              </div>
            </div>
            <div className="control">
              <button className="button is-primary" onClick={() => this.addFood()}>Add</button>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => this.openCloseAddFoodModal()}></button>
        </div>

        <div className="columns">
          <div className="column">
            {this.fillFoodBox()}
          </div>
          <div className="column">
            <List foods={this.state.todayFoods}>Today's foods</List>
          </div>
        </div>
      </div>
    );
  }

  fillFoodBox() {
    return this.state.filteredFoods.map((element, index) => <FoodBox key={index} food={element} addTodayFoodMethod={this.addTodayFood} />);
  }

  openCloseAddFoodModal() {
    this.setState({ isFormActive: !this.state.isFormActive });
  }

  onChangeField(event, field) {
    this.setState({ newFood: { ...this.state.newFood, [field]: event.target.value } });
  }

  addFood() {
    const newFoods = [...this.state.foods];
    newFoods.push(this.state.newFood);
    this.setState({ foods: newFoods }, () => console.log(this.state.foods));
    this.openCloseAddFoodModal();
  }

  filterFoods = text => {
    const filteredFoods = this.state.foods.filter(e => e.name.includes(text));
    this.setState({ filteredFoods: filteredFoods });
  }

  addTodayFood = food => {
    const newTodayFoods = [...this.state.todayFoods];
    newTodayFoods.push(food);
    this.setState({ todayFoods: newTodayFoods }, () => console.log("aqui mostra as today foods. ", this.state.todayFoods));
  }
}

export default App;
