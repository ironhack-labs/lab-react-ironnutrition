import React, {Component} from 'react';

class CreateFood extends Component {
    state= {
        foodName:'',
        foodImage:'',
        calories: 0,
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    };

    handleSubmit = (event) => {
        // prevents page reload
        event.preventDefault();
        const { foodName, foodImage, calories } = this.state;
        // Push the new food to the state from the parent
        this.props.pushFood({
            name: foodName,
            image: foodImage,
            calories
        })
        this.setState({
            foodName:'',
            calories: 0,
            image: ''
        });
    };

    render() {
      const { foodName, calories, foodImage } = this.state;
      return (
          <form onSubmit={this.handleSubmit}>
              <input
              className="input"
              onChange={this.handleChange}
              name="foodName"
              type="text"
              value={foodName}
              placeholder="tomato"
              />
              <input
              className="input"
              onChange={this.handleChange}
              type="number"
              name="calories"
              value={calories}
              />
              <input
              className="input"
              onChange={this.handleChange}
              name="foodImage"
              type="text"
              value={foodImage}
              placeholder="https://i.imgur.com/5ktcSzF.jpg"
              />
              <button className="button">Add</button>
          </form>
      );
  }
}

export default CreateFood;