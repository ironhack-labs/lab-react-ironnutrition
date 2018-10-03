import React, { Component } from 'react';

class Form extends Component {
  state={
    name: '',
    calories: '',
    image: ''
  }

  handleInput = (e) => {
    let change = {}
    //console.log(e.target.name);
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  submitForm = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.onSubmit({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    })
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div class="field has-addons">
        <p class="control">
          <a class="button is-static"> name </a>
        </p>
        <p class="control">
          <input name='name'class="input" type="text" placeholder="name of food" value={this.state.name} onChange={this.handleInput}/>
        </p>
        <p class="control">
          <a class="button is-static"> calories </a>
        </p>
        <p class="control">
          <input name='calories' class="input" type="number" placeholder="calories" value={this.state.calories} onChange={this.handleInput}/>
        </p>
        <p class="control">
          <a class="button is-static"> URL </a>
        </p>
        <p class="control">
          <input  name='image' class="input" type="url" placeholder="URL to image" value={this.state.image} onChange={this.handleInput}/>
        </p>
        <p>
          <button className="button is-success margin">Save changes</button>
        </p>
      </div>
      </form>
    );
  }
}

export default Form;
