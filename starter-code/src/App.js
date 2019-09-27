import React, { Component } from 'react';
import './App.css';

import FoodBox from './components/foodbox'
import foods from './foods.json'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFoods: foods,
      visibleFoods: foods,
      nameInput: "",
      calorieInput: "",
      imageInput: "",
      formShowing: false,
      searchTerm: ""
    }
  }


  showAllTheFoods = () => {

    return this.state.visibleFoods.map((eachfood, i) => {

      return (
        <FoodBox key={i}
          theName={eachfood.name}
          theCalories={eachfood.calories}
          theImage={eachfood.image}
        />
      )

    })

  }

  updateInput = (e) => {

    this.setState({

      // Each form input has a name atttribute equal to our states
      // So when user is typing, we set our state to the input value
      // target.name for example could be nameInput, and we set it to whatver user has in that input
      [e.target.name]: e.target.value

    })

  }

  addNewFood = (e) => {

    // Prevents form from refreshing the page
    e.preventDefault();

    let listUpdated, newFood, newVisibleFoods;

    listUpdated = [...this.state.allFoods];
    newVisibleFoods = [...this.state.visibleFoods];

    // This function is called after updateInput, so the information we need
    // Is already in the state for us after submitting the form
    newFood = {

      name: this.state.nameInput,
      calories: this.state.calorieInput,
      image: this.state.imageInput,

    }

    console.log('About to add food')
    listUpdated.unshift(newFood);

    newVisibleFoods.unshift(newFood);

    console.log('About to set state')
    // Update state with new list , will re render page showing the new food
    this.setState({

      allFoods: listUpdated,
      visibleFoods: newVisibleFoods,
      nameInput: "",
      calorieInput: "",
      imageInput: ""
    })

    // When user submits form, toggle formshowing back to false, which in turn brings back add food buttton
    this.toggleForm();

  }

  toggleForm = () => {

    this.setState({

      // "Toggle" the state by making it true if its false, or making false if its true.
      formShowing: !this.state.formShowing

    })

  }

  search = (e) => {

    // Like in updateValue, state will change for every keystroke by user in the input
    // The callback function is used for asynchronous (set state happens AND THEN does our callback function)
    // This is setStates built in promise functionality ?
    this.setState({ searchTerm: e.target.value }, () => {


      // TODO How does empty search bar string return EVERYTHING if its empty?
      
      // Filters the allFoods state(doesn't manipulate it), and returns a new filtered array from user input 
      // Ex/ "sa" will return salad ,sandy ,salsa
      let filteredFoods = this.state.allFoods.filter((eachfood) => {

        // Upper case everyhting so it won't be case sensative for the user 
        return eachfood.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())

      })

      // Set visible state to filtered foods, the visible foods list is able to be manipulated,
      // But the allfoods list always stays the same unless we add a new food then change the state
      this.setState({ visibleFoods: filteredFoods});

      // Without visible foods, if user backspaced, they wouldn't be able to see the foods they previously
      //  had before filtering because we can't get back what was filtered out, only continue filtering whats left
      
    })




  }

  render() {

    return (

      <div className="App">

        <h2 className="title"> Search </h2>

        {/* search function will keep track of keystrokes */}
        <input
          onChange={this.search}
          value={this.state.searchTerm}
        />

        <h2 className="title"> Foods </h2>

        {/* If form is not showing, then show this button */}
        {!(this.state.formShowing) &&
          <button
            className="button is-success"
            onClick={this.toggleForm}
          >
            Add New Food
        </button>}

        {/* The float left allows us to float the form on the right */}
        <div style={{ width: '40%', float: 'left' }}>

          {this.showAllTheFoods()}

        </div>

        <div style={{ width: '40%', float: 'right' }}>

          {/* TODO : React forms require a value, name, and onChange  */}

          {/* An if statement so form will only show when the state is true */}
          {this.state.formShowing && <form onSubmit={this.addNewFood}>

            <h2 className="title"> Add New Food </h2>

            <legend> Name </legend>
            <input name="nameInput"
              type="text"
              value={this.state.nameInput}
              onChange={this.updateInput} />

            <legend> Calories </legend>
            <input name="calorieInput"
              type="number"
              value={this.state.calorieInput}
              onChange={this.updateInput} />

            <legend> Image </legend>
            <input name="imageInput"
              type="text"
              value={this.state.imageInput}
              onChange={this.updateInput} />

            <button className="button"> Submit </button>

          </form>}

        </div>


      </div>
    );

  }
}

export default App;
