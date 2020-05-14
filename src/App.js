import React from 'react';
import logo from './logo.svg';
import './App.css';
import fileFoods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';

class App extends React.Component {
  state = {
    foods: fileFoods,
    isFormActive: false,
    newFood: { quantity: 0 }
  };

  render() {
    return (
      <div className="App" >

        <button className="button" onClick={() => this.openCloseAddFoodModal()}>Add food</button>
        <div className={'modal ' + (this.state.isFormActive ? 'is-active' : '')}>
          <div className="modal-background"></div>
          <div className="modal-content form-add-food">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" onChange={e => this.onChangeField(e, 'name')}/>
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
                <input className="input" type="text" onChange={e => this.onChangeField(e, 'image')}/>
              </div>
            </div>
            <div className="control">
              <button className="button is-primary" onClick={() => this.addFood()}>Add</button>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => this.openCloseAddFoodModal()}></button>
        </div>

        {this.fillFoodBox()}
      </div>
    );
  }

  fillFoodBox() {
    return this.state.foods.map((element, index) => <FoodBox key={index} food={element} />);
  }

  openCloseAddFoodModal() {
    this.setState({ isFormActive: !this.state.isFormActive });
  }

  onChangeField(event, field) {
    this.setState({ newFood: { ...this.state.newFood, [field]: event.target.value }});
  }

  addFood() {
    const newFoods = [ ...this.state.foods];
    newFoods.push(this.state.newFood);
    this.setState({ foods: newFoods }, () => console.log(this.state.foods));
    this.openCloseAddFoodModal();
  }
}

export default App;
