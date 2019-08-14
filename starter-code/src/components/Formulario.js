import React, { Component } from 'react';

class AddFood extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            calories: '',
            quantity: 0,
            image:''
        }
    }
    handleFormSubmit = e => {
      e.preventDefault()
console.log(this.props)

      this.props.addNewFood(this.state)
      this.setState({
        name: '',
        calories: '',
        quantity: 0,
        image:''
      })
  }
  
    handleInputChange = e => {


      let { name, value } = e.target
      console.log(name, value)
      this.setState({ [name]: value })
  }



    render() {
        return (

            <section>

                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Name: <br />
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInputChange(e)} />
                    </label>

                    <label>
                        Calories: <br />
                        <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleInputChange(e)} />
                    </label>

                    <label>
                        Image: <br />
                        <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleInputChange(e)} />
                    </label>

                    <label>
                        Quantity: <br />
                        <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleInputChange(e)} />
                    </label>



                    <input type="submit" value="Enviar" />
                </form>

            </section>

        )
    }
}

export default AddFood;