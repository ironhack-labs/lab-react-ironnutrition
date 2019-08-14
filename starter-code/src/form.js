import React, { Component } from 'react'

class AddFood extends Component {

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
        console.log(this.props)
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: ''
        })
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

                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Name: 
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </label> <br />

                    <label>
                        Calories: 
                        <input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                    </label><br />

                    <input type="submit" value="Enviar" />
                </form>

            </section>

        )
    }
}

export default AddFood;