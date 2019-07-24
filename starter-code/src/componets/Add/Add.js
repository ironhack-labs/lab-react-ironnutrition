import React, { Component } from 'react';
import './Add.css';

class Add extends Component {
 
    constructor(props){
        super(props)
        this.state = {
            name: '',
            calories: '',
            image: '',
            showing:false
        }
    }

  updateInput = (e) => {
    console.log('--------')
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value})
  }

  AddFood = (e)=>{
      e.preventDefault();
      this.props.addNewFood(e,
          this.state.newName,
           this.state.newCalories,
            this.state.newImage)

        this.setState({
        newName: '',
        newCalories: '',
        newImage: '',
        showing:false})
      
  }

    render(){
        return(
            <div>
                {
                    this.state.showing ?
                    <form onSubmit={this.AddFood}>
<div class="field">
  <label class="label">Food Name</label>
  <div class="control">
    <input class="input" value={this.state.newName} onChange = {this.updateInput} name="newName" type="text" placeholder="Name Of Food" />
  </div>
</div>

<div class="field">
  <label class="label">Calories</label>
  <div class="control">
    <input class="input" value={this.state.newCalories} onChange = {this.updateInput} name="newCalories" type="number" placeholder="Calories amount"/>
  </div>
</div>

<div class="field">
  <label class="label">Image Url</label>
  <div class="control">
    <input class="input" value={this.state.newImage} onChange = {this.updateInput} name="newImage" type="text" placeholder="imageurl"/>
  </div>
</div>
<button onClick ={() => this.setState({showing: false})}>Close</button>

<button>Add Food</button>
</form>
:
<button onClick ={() => this.setState({showing: true})}>Add New</button>
                }

            </div>
         
        )
    }





}

export default Add;