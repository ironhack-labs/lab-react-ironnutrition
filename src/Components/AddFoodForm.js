import { Component } from 'react';
import 'bulma/css/bulma.css';

class AddFoodForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    };
  }

  render() {
    return (
      <section className="food-form">
        <h2>Añadir comida</h2>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="field">
            <label>
              Nombre:
              <div className="control">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
            </label>
          </div>

          <div className="field">
            <label>
              Calories:
              <div className="control">
                <input
                  type="text"
                  name="calories"
                  value={this.state.calories}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
            </label>
          </div>

          <div className="field">
            <label>
              Image:
              <div className="control">
                <input
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
            </label>
          </div>

          <div className="field">
            <label>
              Quantity:
              <div className="control">
                <input
                  type="text"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
            </label>
          </div>
          <input className="button" type="submit" value="Añadir comida" />
        </form>
      </section>
    );
  }
}
export default AddFoodForm;
