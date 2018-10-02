import React from 'react'
import { render } from 'react-dom'
import ItemItem from './ItemList'
 
class App extends React.Component{
  constructor(){
    super(...arguments)
       this.state = {
       firstName: '',
       lastName: '',
       age: ''
      }  
  }
  
  handleChanges(e){
    let newState = Object.assign(this.state, {[e.target.id]: e.target.value})
    this.setState(newState)
  }
 
  render(){
    return (
      <form>
        <label htmlFor='firstName'>Nombre</label>
        <input id='firstName' type='text' value={this.state.firstName}  onChange={this.handleChanges.bind(this)}/>
        <br/>
        <label htmlFor='lastName'>Apellido</label>
        <input id='lastName' type='text' value={this.state.lastName}  onChange={this.handleChanges.bind(this)}/>
        <br/>
        <label htmlFor='age'>Edad</label>
        <input id='age' type='number' value={this.state.age}  onChange={this.handleChanges.bind(this)}/>
      </form>
    )
  }
}
render(<App/>, document.getElementById('root'));