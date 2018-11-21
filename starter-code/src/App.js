import React, { Component } from 'react';
import './App.css';
import foods from "./foods.json";

class App extends React.Component {
constructor(){
  super();
  this.state ={
    foodS: [],
    foody: foods,
    val: 0
  }
  this.update = this.update.bind(this)
}
update(){
  this.setState({val: this.state.val + 1})
}
componentWillMount(){
  //llamar a nuestras elementos del state
  let {foodS, foody}= this.state;

  //insertar los primeros 5 a nuestro array ContactS
  foodS = foody.splice(0,16)
  //setear el nuevo contactS para que se vean los cambios
  this.setState({foodS})
  //este nada mas es un console para ver si si hay 5 
  console.log("tengo algo",foodS)

}
//buscar con el input las comidas
filter(e){
this.setState({filter: e.target.value})
}
render(){
  let foodS = this.state.foodS
  if(this.state.filter){
    foodS = foodS.filter(foodS => 
      foodS.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
  }
  return(
    <div>
      <input type="text" onChange={this.filter.bind(this)}/>
    {foodS.map(foodS => <Comida key={foodS.name} comida={foodS}/> )}
    
    </div>
  )

}
}
const Comida = (props ) => <div className="box">
<div className="container">

<article className="media">
  <div className="media-left">
    <figure className="image is-64x64">
      <img className="imagen" src={props.comida.image} />
    </figure>
  </div>
  <div className="media-content">
    <div className="content">
      <p>
        <strong>{props.comida.name}</strong> <br />
        <small>{props.comida.calories}</small>
      </p>
    </div>
  </div>
  <div className="media-right">
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="number" 
          value={props.comida.quantity}
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

</div>

  
export default App;
//<div><a>{props.comida.image}</a><h4>{props.comida.name}</h4> <h6>{props.comida.calories}</h6></div>