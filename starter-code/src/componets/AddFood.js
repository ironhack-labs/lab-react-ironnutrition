import React, { Component } from 'react';

class AddFood extends Component {
// ({ name, calories, image })
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            calories: '',
            image: ''
        }
    }


    handleFormSubmit = e => {
        e.preventDefault()

        

        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: ''
        })

        console.log(this.state)
    }

    /*
    handleTitleInput = e => this.setState({ title: e.target.value })
    handleDirectorInput = e => this.setState({ director: e.target.value })
    handleOscarsInput = e => this.setState({ hasOscars: e.target.checked })
    handleRatingInput = e => this.setState({ IMDbRating: e.target.value })
    */

    handleInputChange = e => {


        let { name, value } = e.target

        

        this.setState({ [name]: value })
    }



    render() {
        return (

            <section>
                <h2><strong>ADD FOOD</strong></h2>
                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Nombre: <br />
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Imagen: <br />
                        <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </label>


                    <label>
                        Calorías: <br />
                        <input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                    </label>

                    

                    <input type="submit" value="Enviar" />
                </form>

            </section>

        )
    }
}

export default AddFood;