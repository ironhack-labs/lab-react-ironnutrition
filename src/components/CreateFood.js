import React, {Component} from 'react';

class CreateFood extends Component {
    state= {
        name:'',
        pictureUrl:'https://images.unsplash.com/photo-1528328791021-a7d71822ffcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        calories: 0,
        quantity: 0
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    };



    handleFormSubmit = (event) => {
        event.preventDefault();
        // Push the new food
        this.props.addTheFood(this.state);
        this.setState({
            name:'',
            calories: 0,
            quantity: 0
        });
    };

    render() {
        return (
          <div>
            <form
              action=""
              onSubmit={this.handleFormSubmit}
              className="is-hidden"
              id="addFoodForm"
            >
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
              <label htmlFor="">Calories</label>
              <input
                type="number"
                name="calories"
                value={this.state.calories}
                onChange={(e) => this.handleChange(e)}
              />
              <label htmlFor="">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={this.state.quantity}
                onChange={(e) => this.handleChange(e)}
              />
              <button type="submit" className="button is-success">
                Submit!
              </button>
            </form>
          </div>
        );
    }
}

export default CreateFood;