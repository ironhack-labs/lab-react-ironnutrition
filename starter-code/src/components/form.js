import React from 'react'

export default function form(props) {
    return (
        <div>
            {props.formIsShowed && (
          <form className="food-Form" onSubmit={(e) => props.handleSubmit(e)}>
            <label name="name">Name</label>
            <input
              type="text"
              name="name"
              value={props.name}
              onChange={(e) => this.handleInput(e)}
            ></input>
            <label name="calories"> Calories</label>
            <input
              type="number"
              name="calories"
              value={props.calories}
              onChange={(e) => props.handleInput(e)}
            ></input>
            <label name="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={(e) => props.handleInput(e)}
            ></input>
            <label name="image">Image</label>
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={(e) => props.handleInput(e)}
            ></input>
            <input type="submit" value="submit"></input>
          </form>
        )}
        </div>
    )
}
