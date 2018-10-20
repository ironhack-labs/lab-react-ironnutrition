import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'

class FoodTag extends Component {
  constructor(props) {
    super(props)
    this.state = { qty: 1 }
  }

  handleChange(event) {
    this.setState({ qty: parseInt(event.target.value) })
  }

  handleClick(){
    this.props.addQuantity(this.props.name, this.state.qty)
    this.setState({qty:1})
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64"> <img src={this.props.image} /></figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                {/* <input className="input" type="number" defaultValue={this.props.quantity}  onChange={(e) => this.props.addQuantity(this.props.name,e.target.value)}/> */}
                <input className="input" type="number" value={this.state.qty} onChange={(e) => this.handleChange(e)} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() =>{this.handleClick()}}>
                  +
      </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}


class FormAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      calories: 0,
      img: "",
      quantity: 1,
    }
  }

  handleChange(event) {
    let { name, value } = event.target;
    if (name === this.state.calories || name === this.state.quantity) {
      value = parseInt(value);
    }
    this.setState({ [name]: value });
  }
  // newFood() {
  //   this.props.displayForm
  //   this.setState({ displayForm: false })
  // }

  handleSubmitButtonForm() {
    const foodAdd = this.state
    this.props.handleForm()
    this.props.handleFormSubmit(foodAdd)
  }

  render() {
    return (
      <div>
        <form>
          <label for="food">Name: </label>
          <input type="text" id="food" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
          <label for="calories">Number of calories: </label>
          <input type='number' id="calories" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
          <label for='image'>Image: </label>
          <input type='text' id="image" name="img" value={this.state.img} onChange={(e) => this.handleChange(e)} />
          <button onClick={() => this.handleSubmitButtonForm()} >Submit</button>
          {/* <input type="submit" value="Submit" onClick={()=>this.setState({displayForm: false})} /> */}
        </form>
      </div>);
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { foods, listFoods: foods, selectedFood: [], displayForm: false, searchText: "", displayButtonForForm: true }

  }

  toggleTitle() {
    this.setState({ displayForm: !this.state.displayForm })
    this.setState({ displayButtonForForm: !this.state.displayButtonForForm })
  }

  // handleChange() {

  // }

  addNewFood(foodAdd) {
    var arrayFood = this.state.listFoods
    arrayFood.push(foodAdd)
    this.setState({ listFoods: arrayFood })
  }

  searchFilter(food) {
    return food.name.includes(this.state.searchText)
  }

  addAppQuantity(name, val) {
    // var arraySelected = {};
    var selectedFoodCopy = this.state.selectedFood

    var temparray = selectedFoodCopy.filter(food => food.name.includes(name))
    // console.log(selectedFoodCopy.filter(food=>food.name.includes(name)))
    if (temparray.length>0) {
      selectedFoodCopy.filter(food => food.name.includes(name)).map(food => {
        food.name=name
        food.image=food.image
        food.quantity += val
        food.calories += val * food.calories
      }

      )
    } else {
      this.state.listFoods.forEach(food => {
        if (food.name === name) {
          food.quantity = parseInt(val)
          console.log("new quantity", food.quantity)
          selectedFoodCopy.push(food)
        }
      })
      // }


    }

      // console.log(selectedFoodCopy)

      this.setState({ listFoods: this.state.listFoods, selectedFood: selectedFoodCopy })
    }

    totalCalories() {
      var totalCalories = 0;
      this.state.selectedFood.forEach(food => {
        totalCalories += parseInt(food.quantity) * parseInt(food.calories)
      })
      return totalCalories
    }

    totalCaloriesByline(qty, calory) {
      return qty * calory;
    }

    clearSelectedFood() {
      this.setState({ selectedFood: [] })
    }

    clearThisIngredient(name) {
      var selectedFoodCopy = this.state.selectedFood
      selectedFoodCopy = selectedFoodCopy.filter(food =>
        food.name != name);
      console.log("selected", selectedFoodCopy, name)
      this.setState({ selectedFood: selectedFoodCopy })
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <label> Search:</label>
            <input type="text" onChange={(e) => this.setState({ searchText: e.target.value })}></input>
          </div>
          <div>
            {this.state.displayForm ? (<FormAdd handleNewFoodInApp={(food) => this.addNewFood(food)} handleForm={this.toggleTitle.bind(this)} handleFormSubmit={this.addNewFood.bind(this)} />) : ''}
            {this.state.displayButtonForForm ? (<button onClick={this.toggleTitle.bind(this)}>{this.state.displayForm ? 'Submit' : 'Want to add new food?'}</button>) : ''}
          </div>
          {
            this.state.listFoods.filter(this.searchFilter.bind(this)).map(food => {
              return (
                <FoodTag key={food.name} name={food.name} calories={food.calories} image={food.image} addQuantity={this.addAppQuantity.bind(this)} quantity={food.quantity} />

              )
            }

            )
          }
          <div>
            <h1>Today's Food</h1>
            <ul>
              {
                this.state.selectedFood.map(food => {
                  return (
                    <div>
                      <li key={food.name}>{food.quantity} {food.name} : {this.totalCaloriesByline(parseInt(food.calories), parseInt(food.quantity))}</li>
                      <button onClick={() => this.clearThisIngredient(food.name)}>Remove this ingredient</button>
                    </div>
                  )
                })


              }
            </ul>
            <div>Total: {this.totalCalories()}</div>
            <button onClick={this.clearSelectedFood.bind(this)}>Clear Calculation</button>
          </div>
        </div>
      );
    }
  }

  export default App;
