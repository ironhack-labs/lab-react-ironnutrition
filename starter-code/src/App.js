import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
//import AddFood from './AddFood.js';


class App extends Component {

  state = {
    foods: foods,
    updatedFoods: [],
    name: '',
    calories:'',
    image: '',
    clicked: false,
    filter:''
  }

  filterFood = (event) => {
    let { name, value } = event.target;
    console.log(name, value)
    this.setState({ [name]: value });

      let updatedList = [...this.state.foods];
      updatedList = updatedList.filter(function(item){
        return item.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({
        updatedFoods: updatedList
      });
  }

  componentWillMount = () => {
    this.setState({
      updatedFoods: this.state.foods
    });
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    console.log(name, value)
    this.setState({ [name]: value });
  }
  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.addFoodHandler(this.state)

  }

  displayForm = () => {
    if (this.state.clicked) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
          <label>Image URL:</label>
          <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
        </div>
      )
    }
    return <h1>Not Clicked!</h1>
  };

  toggleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };


  showFoods = () => {
    let foodList = this.state.updatedFoods.map((food, i) => {
      return (
      <div className="box" key={i}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value="1"
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div> 
    )  
    });
    return (foodList);
  }

  render() {
    return (
      <div className="App">
        <div>

          <button onClick={this.toggleClick} className="button is-info">Add Food</button>
          {this.displayForm()}
        </div>
        <div>
          <input type="text" className="" placeholder="Search" name="filter" value={this.state.filter} onChange={(e) => this.filterFood(e)}></input>
        </div>
       

        {this.showFoods()}

      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import 'bulma/css/bulma.css';
// import foods from './foods.json'
// import FoodList from './FoodBox.js';

// class App extends Component {

//   state = {
//     clicked: false
//   }

//   displayForm = () => {
//     if (this.state.clicked) {
//       return (
//         <div>
//           < FoodList />
//         </div>
//       )
//     }
//     return <h1>Not Clicked!</h1>
//   };

//   toggleClick = () => {
//     this.setState({
//       clicked: !this.state.clicked
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//          <button onClick={this.toggleClick} className="button is-info">Add Food</button>
//           {this.displayForm()}
//         <FoodList/>
//       </div>
//     );
//   }
// }

// export default App;
