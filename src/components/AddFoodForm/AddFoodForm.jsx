import { Input, Row, Col,Button } from 'antd';
import React from 'react';
const style = {
  margin: '8px 0',
};
const INITIAL_STATE = {
  name: '',
  servings: '',
  image: '',
  calories:''
}

class AddFoodForm extends React.Component {

  state = {...INITIAL_STATE }

  handleOnChange = (event) => {
    const { value, name } = event.target // name- calories-servings-images
    this.setState({ [name]: value }) // meter entre corchetes una variable para hacer el key dinamico
  }

  onSubmit = (event) => {
    event.preventDefault() // Para evitar el comportamiento por defecto de un form, que seria hacer peticion get y nos refrescaria la pagina
    this.props.createDish(this.state)
    this.setState({...INITIAL_STATE})//para volver al estado inicial y q no aparezca nada en los inputs
  }

  render () {

    const {name, servings, image, calories }= this.state

    return (
      <form onSubmit={this.onSubmit}>
        <Row >
          <Col span={24}>
            <label>Name of the dish: </label>
            <input
              name="name" id="name"
              value={name} onChange={this.handleOnChange}
              placeholder="Name of the dish"
              required
              style={style}
            />
          </Col>
          <Col span={24}>
          <label>Calories of the dish: </label>
            <input
              name="calories" id="calories"
              value={calories} onChange={this.handleOnChange}
              placeholder="Calories of the dish"
              style={style}
            />
          </Col>
          <Col span={24} >
          <label>Servings of the dish: </label>
            <input
              name="servings" id="servings"
              value={servings} onChange={this.handleOnChange}
              placeholder="Servings of the dish"
              style={style}
            />
          </Col>
          <Col span={24}>
            <label>Image url of the dish: </label>
            <input
              name="image" id="image"
              value={image} onChange={this.handleOnChange}
              placeholder="Image url of the dish"
              style={style}
            />
          </Col>
          <Col span={24}>
            <Button type="dashed">Submit</Button>
          </Col>
          </Row>
      </form>
    )
  }
  }

export default AddFoodForm