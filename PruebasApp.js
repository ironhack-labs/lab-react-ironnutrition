// import React from 'react';
// import './App.css';
// import 'bulma/css/bulma.css'
// import foods from './foods.json'
// import FoodBox from './components/FoodBox'
// import Search from './components/Search'

// class App extends React.Component {

//   state = {
//     foodsList: foods,

//     temporalSearchFood: {
//       name: ''
//     },

//     updateSearchFoods: (_name, _value) => {

//       const copyOfFoodsList = {...this.state}
//       copyOfFoodsList.foodsList = foods
//       this.setState(copyOfFoodsList)

//       const copyOfTemporalSearchFood = { ...this.state.temporalSearchFood }
//       copyOfTemporalSearchFood.name = _value
//       this.setState({temporalSearchFood: copyOfTemporalSearchFood})

//       const newList = copyOfFoodsList.foodsList.filter((food)=>{
//         return (food.name.toLowerCase().includes(copyOfTemporalSearchFood.name.toLowerCase())) 
//       })

//       this.setState({foodsList: newList})
//     },

//     addNewFood: (event) => {
//       event.preventDefault()
//       const copyOfFoodsList = [...this.state.foodsList]
//       copyOfFoodsList.unshift(this.state.temporalNewFood)
//       this.setState({ foodsList: copyOfFoodsList })
//     },

//     temporalNewFood: {
//       name: '',
//       image: '',
//       calories: ''
//     },

//     updateFoods: (_name, _value) => {
//       const copyOfTemporalFood = { ...this.state.temporalNewFood }

//       if (_name === 'calories') {
//         copyOfTemporalFood.calories = _value
//       } else if (_name === 'name') {
//         copyOfTemporalFood.name = _value
//       } else if (_name === 'image') {
//         copyOfTemporalFood.image = _value
//       }

//       this.setState({ temporalNewFood: copyOfTemporalFood })
//     },

//     display: 'none',

//     changeDisplay: () => {
//       this.state.display === 'none'
//         ? this.setState({ display: 'block' })
//         : this.setState({ display: 'none' })
//     },

//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>IronNutrition</h1>

//         <Search
//         temporalSearchFood={this.state.temporalSearchFood}
//         updateSearchFoods={this.state.updateSearchFoods}
//         resetList={this.state.resetList}
//         />

//         <FoodBox 
//         foods={this.state.foodsList}
//         addNewFood={this.state.addNewFood}
//         temporalNewFood={this.state.temporalNewFood}
//         updateFoods={this.state.updateFoods}
//         display={this.state.display}
//         changeDisplay={this.state.changeDisplay}
//         />

//       </div>
//     );
//   }
// }

// export default App;
