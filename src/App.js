import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood';

class App extends React.Component {
  state = {
    foods: foods,
  };

  showInfo = (event) => {
    event.preventDefault();
    const form = event.target.nextSibling;
    form.classList.toggle('hide');
  };

  handleSubmitNewFood = (state, event) => {
    event.target.classList.toggle('hide');
    const foodsCopy = [...foods];
    // dont want to use server or save the image
    const newFood = {name: state.name, calories: state.cal, image: "https://i.imgur.com/hGraGyR.jpg", quantity: 0 };
    foodsCopy.push(newFood);
    this.setState(() => ({foods: foodsCopy}));
    event.preventDefault();
  }

  render() {
    const foodList = this.state.foods.map((food, index) => {
      return <FoodBox key={index} food={food} />;
    });
    return (
      <div className="App">
        <button className="button is-primary" onClick={this.showInfo}>
          Add a food
        </button>
        <NewFood handleSubmitNewFood={this.handleSubmitNewFood} />
        {foodList}
      </div>
    );
  }
}

export default App;

// <div class="field is-horizontal">
//   <div class="field-label is-normal">
//     <label class="label">To</label>
//   </div>
//   <div class="field-body">
//     <div class="field">
//       <p class="control">
//         <input class="input" type="email" placeholder="Recipient email">
//       </p>
//     </div>
//   </div>
// </div>
