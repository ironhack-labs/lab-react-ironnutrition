import React, { Component, Fragment } from 'react'
import 'bulma/css/bulma.css'

class Addform extends Component {
  constructor(props) {
    super(props)

    this.state = { name: '', calories: '', image: '' }
  }

  changeHandler = e => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  submitHandler = e => {
    e.preventDefault()

    const { createHandler } = this.props

    createHandler(this.state)

    this.setState({ name: '', calories: '', image: '' })
  }

  render() {
    const { name, calories, image } = this.state
    return (
      <Fragment>
        <form onSubmit={this.submitHandler}>
          <fieldset>
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
            </div>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Some food goes here"
                name="name"
                value={name}
                onChange={this.changeHandler}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="field">
              <label htmlFor="calories" className="label">
                Calories
              </label>
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="How many calories?"
                name="calories"
                value={calories}
                onChange={this.changeHandler}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="field">
              <label htmlFor="image" className="label">
                Image URL
              </label>
            </div>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="And a link for an image"
                name="image"
                value={image}
                onChange={this.changeHandler}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </Fragment>
    )
  }
}

export default Addform
