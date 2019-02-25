import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class FoodForm extends Component {

  state = {
    name: "",
    calories: "",
    image: ""
  }

  handleFoodSubmit = (e) => {
    e.preventDefault();
    this.props.submit({...this.state, quantity: 0});
    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  }

  dataHandler = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Form layout="vertical" style={{ width: "20vw" }}>
        <Input
          placeholder="Name"
          name="name"
          value={this.state.name}
          required
          onChange={e => this.dataHandler(e)}
        />
        <Input
          placeholder="Calories"
          name="calories"
          value={this.state.calories}
          required
          pattern={"^[0-9]{4}$"}
          onChange={e => this.dataHandler(e)}
        />
        <Input
          placeholder="Image URL"
          name="image"
          value={this.state.image}
          onChange={e => this.dataHandler(e)}
        />
        <Button type="primary"
          onClick={this.handleFoodSubmit}
          style={{ width: "20vw" }}>Submit</Button>
      </Form>
    )
  }
}

export default FoodForm;