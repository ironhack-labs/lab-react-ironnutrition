import React from 'react';

export default function FoodForm( { data } = this.props ) {

  handleFormSubmit = (event, data) => {
    event.preventDefault();

    let newFood = {
      
    }

    console.log('agregando');

    data.foods.push(newFood);

    this.setState({ data });
  }

  return (
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input type="text" className="input" name="name" placeholder="Enter name of new food..."/>
      </div>
      <label className="label">Calories</label>
      <div className="control">
        <input type="text" className="input" name="calories" placeholder="Enter calories of new food..."/>
      </div>
      <label className="label">Image URL</label>
      <div className="control">
        <input type="text" className="input" name="image" placeholder="Enter image URL of new food..."/>
      </div>
      <div className="control has-text-centered">
        <button className="button is-info" onClick={addNewFood}>Submit</button>
      </div>
    </div>
  );
}