import React from 'react';

class CardForm extends React.Component {

  state= {
    newFood: {
      name: "",
      calories: "",
      image: "",
      quantity: 0
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value)
    this.setState({
      newFood: {
        name: e.target.name.value,
        calories: e.target.calories.value,
        image: e.target.urlImage.value,
        quantity: 0
      }
    }, ()=> this.props.addNewFood(this.state.newFood))
  }

  render() {
    return (
      <form className="card"  onSubmit={this.handleSubmit}>
        <div className="card-header has-background-light">
          <p className="card-header-title is-centered">Add some Food!</p>
        </div>
        <div className="card-content">
          <div className="content">
            <div className="field">
              <label className="label">Name</label>
              <input className="input" type="text" placeholder="Text input" name="name" />
            </div>

            <div className="field">
              <label className="label">Calories</label>
              <input className="input " type="text" placeholder="Text input" name="calories" />
            </div>

            <div className="field">
              <label className="label">Image url</label>
              <input className="input" type="text" placeholder="Text input" name="urlImage" />
            </div>
          </div>  </div>
        <footer className="card-footer field is-grouped control ">
          <button type="submit" className="card-footer-item  has-background-info is-size-5 has-text-white">Submit!</button>
        </footer>
      </form>

    );
  }
}

export default CardForm