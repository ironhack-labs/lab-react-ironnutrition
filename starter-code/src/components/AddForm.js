import React, { Component } from 'react'

export default class AddForm extends Component {

  constructor(){
    super()
    this.state = {}
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddCb = () => {
    const { name, calories, image } = this.state
    this.props.add({ name, calories, image, quantity: 0 })
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add new food</p>
            <button onClick={() => this.props.close()} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" onChange={this.handleInput} value={this.state.name || ''} type="text" name="name" id="name"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Calories</label>
              <div className="control">
                <input className="input" onChange={this.handleInput} value={this.state.calories || ''} type="number" name="calories" id="calories"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input className="input" onChange={this.handleInput} value={this.state.image  || ''} type="text" name="image" id="image"/>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button onClick={this.handleAddCb} className="button is-success">Save</button>
            <button onClick={() => this.props.close()} className="button">Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}
