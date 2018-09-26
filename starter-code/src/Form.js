import React, {Component} from 'react'

class Form extends Component{
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: ''
  }
  onSubmit = (e) =>{
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: ''
    })
  }
  render(){
    // console.log(this.state.name)
    return(
      <form>
          <input placeholder="Name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}  />
          <br/>

          <input placeholder="Calories" value={this.state.calories} onChange={e => this.setState({calories: e.target.value})}  />
          <br/>
          <input placeholder="Image" value={this.state.image} onChange={e => this.setState({image: e.target.value})}  />
          <br/>
          <input placeholder="Quantity" value={this.state.quantity} onChange={e => this.setState({quantity: e.target.value})}  />
          <br/>
          <button onClick={e => this.onSubmit(e)} >Submit</button>
        
          <br/>
      </form>

    )
  }
}

export default Form
