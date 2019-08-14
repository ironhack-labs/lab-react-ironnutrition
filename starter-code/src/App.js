import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './components/foods.json'
import FoodBox from './components/FoodBox';
import Formulario from "./components/formulario"

class App extends Component {
  constructor(){
    super()
    this.state ={
      foods:foods,
      showForm: false
    }
  }  
  
  toggleForm = ()=>{
    this.setState({showForm: !this.state.showForm})
  }
  

  addFoods = (foods) => {
    const updatedFoods = [...this.state.foods];
    updatedFoods.push(foods);
    this.setState({
      foods: updatedFoods
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to IronNutrition</h1>
        </header>
        

       <div className="container espacio-top">
        <div className="columns">
          <div className="column">
            <h2>Listado de Alimentos</h2><br/>
            <div className="espacio-2">
              {this.state.foods.map((elm, idx) => {
                return <FoodBox key={idx} 
                              name={elm.name} 
                              calories={elm.calories} 
                              pictureUrl={elm.image} 
                              quantity={elm.quantity} 
                        /> 
              })}
            </div>
          </div>
          <div className="column">
              <h2>Añadir otro alimento</h2>
              <button className = "btn btn-boton" onClick={()=>this.toggleForm()}>Añadir otro alimento</button><br/>
              {this.state.showForm && <Formulario addTheFood={this.addFoods} /> }
          </div>  
        </div>
        
       </div> 
      </div>
    );
  }
}

export default App;
