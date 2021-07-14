import { Component } from 'react';
import Button from './Button';
import Form from './Form';
import Foods from './Foods';

class NewFood extends Component {
    constructor() {
        super()
        this.state = {
            form: {
                name: '',
                calories: '',
                image: '',
            },
            hidden: false
        }


    }


    showForm = e => {
        this.setState({ hidden: true })
    }

    handleInputChange = e => {

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    submitForm = e => {
        e.preventDefault()
        this.props.foodsCopy.push(this.state.form)
        console.log(this.props)

        this.setState({
            hidden: false
        })

    }



    render = () => {
        return (

            <>
                <Button name="Show form" fn={this.showForm} />

                {this.state.hidden ? <Form handleInputChange={this.handleInputChange} submitForm={this.submitForm} /> : null}

                <Foods foodsCopy={this.props.foodsCopy} />
            </>


        )
    }
}

export default NewFood;