import React, { Component } from 'react';



class AddFood extends Component {
  render() {
      return (
        <div className="app">

            <form onSubmit={this.props.onAdd}>
                <input name="name" type="text" placeholder="Name"></input>
                <input name="calories" type="text" placeholder="Calories"></input>
                {/* <input name="quantity" type="text" placeholder="Quantity"></input> */}
                <input name="image" type="text" placeholder="URL"></input>
                <button className="button" type="submit">Submit</button>
            </form> 

        </div>
    )
  }
}

export default AddFood