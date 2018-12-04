import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
        <div>
        <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder=""/>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Number of calories</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="" value=""/>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success"></p>
      </div>
      
      <div class="field">
        <label class="label">Image</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="text" placeholder="" value=""/>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>
      
      </div>
      
    )
  }
}
export default Form