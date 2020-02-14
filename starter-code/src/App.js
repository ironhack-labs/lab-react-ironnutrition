import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';



class App extends Component {

state = { //state is like a global variable 
  foods:foods,
  showTheForm: false,  
  name: "",   // you have to initially set these values to nothing or they only exsist when you start to type 
  calories: "", 
  image: "",
}




addMoreFoodBox = () => {

 return this.state.foods.map((eachFood, index) => { //eachFood represent each and every object in the array aka sweet potatp,gnocchi...THEN index picks the specific food aka the object in the array...like just sweet potato
    return <Foodbox {...eachFood} /> //shortcut to writing out all the props
  
  }) 
   
  }

deleteFood = () => {}

toggleForm = () => {
  console.log('toggleForm')
  this.setState({ showTheForm: !this.state.showTheForm  }) //takes an object as an argument, changes the state to show to unshow through boolean 
   
}

typing = (e) => {
  console.log(e.target.name + "=" + e.target.value)

  let name = e.target.name
  this.setState ({    //now set it to state setState
    [name]: e.target.value 
  })
 
}


submitting = (e) => {
  e.preventDefault();
  
  if(this.state.name !== "") {

    let newFoodsArr = [...this.state.foods]; 
    newFoodsArr.unshift({
      name: this.state.name, 
      calories: this.state.calories,
      image: this.state.image
    })
    this.setState({
      foods: newFoodsArr, 
      name: "", //need to reset it back to blank everytime or it will still hold the values from before 
      calories: "",
      image:"",
      showTheForm: false    }) //this will hide the form as well along with resetting the values 
  }

}

showTheForm = () => {
  if(this.state.showTheForm){
    return (
            <form onSubmit={this.submitting}>
              <input type="text" placeholder="name" name="name" onChange={this.typing}></input>
              <input type="number" placeholder="calories" name="calories" onChange={this.typing}></input>
              <input type="text" placeholder="image" name="image" onChange={this.typing}></input>
              <input type="submit"/>
            </form>
    ) 
  } else {
    return ""
  }
}



  // hint = () => {
  //   return <i>hint</i>
  // }

  render() {
    return (
      <div className="App">
      {/* {this.toggleForm()} */}
      {this.showTheForm()}
      <button onClick = {this.toggleForm}>Add Food</button>
      {this.addMoreFoodBox()}
      
      </div>
    );
  }
}
//debug github with a comment 
export default App;
