import React, { Component } from 'react'

export default class FoodForm extends Component {
    state={
        name:'',
        calories:'',
        error:''
    }

    handleSubmit=()=>{
        let {name,calories} = this.state;
        if(name === '') return this.setState({error:'Empty name'});
        if(calories === '') return this.setState({error:'Empty calories'});

        this.setState({name:'',calories:'',error:''})
        this.props.foodReady({name,calories:+calories});
    }

  render() {
      let {name,calories,error} = this.state;
    return (
        <div>
         <p style={{color:"red"}}>{error}</p>
        <label>Food</label>
        <input type="text" value={name} onChange={(e) => this.setState({name:e.target.value})} />
        <br/>
        <label>Calories</label>
        <input type="text" value={calories} onChange={(e) => this.setState({calories:e.target.value})}/>
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
    </div>
    )
  }
}
