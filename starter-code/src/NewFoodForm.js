import React from "react";
import "./NewFoodForm.css"

class NewFoodForm extends React.Component {
    state = {
        name: undefined,
        calories: undefined,
        image: "",
        quantity: undefined
    }

    changeFormData(e, key) {
      const newState = {...this.state}
      newState[key] = e.target.value

      this.setState(newState);
    }

    collectFoodInfo(e) {
      e.preventDefault();

      this.setState({
          ...this.state
      }, function () {
          this.props.newFood(this.state)
      })
    }

    render() {
        
      return (
          <form className="newFoodForm">
              <h1>Your food is {this.props.name}</h1>
              
              <div class="columns">

              <div class="column">
              <label>Food name: </label>
              <input className="input is-primary" 
                  type="text" 
                  name="name" 
                  placeholder="write a name"
                  value={this.state.name} 
                  onChange={(e) => this.changeFormData(e, 'name')} />
                </div>

                <div class="column">
              <label>Calories: </label>
              <input className="input is-primary"
                  type="text" 
                  name="calories" 
                  value={this.state.calories} 
                  onChange={(e) => this.changeFormData(e, 'calories')} />
                  </div>
                  </div>

                  <div class="columns">
                <div class="column">
              <label>Food quantity: </label>
              <input className="input is-primary"
                  type="text" 
                  name="quantity" 
                  value={this.state.quantity} 
                  onChange={(e) => this.changeFormData(e, 'quantity')} />
                  </div>


                <div class="column">
              <label>Food image URL: </label>    
              <input className="input is-primary"
                type="text" 
                name="image" 
                value={this.state.image} 
                onChange={(e) => this.changeFormData(e, 'image')} />   
                </div>
                </div>             

              <button onClick={(e) => this.collectFoodInfo(e)} className="button is-primary">Add to list</button>
          </form>
      )
  }


}

export default NewFoodForm;
