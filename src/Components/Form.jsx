import React from 'react'
import foods from '../foods.json';
import InputWithLabel from './InputWithLabel'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            calories: '',
            image: '',
            foods: [foods],
            form: true,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        console.log('entra')
        e.preventDefault();
        let newFood = {
            name: this.state.name,
            calories: Number(this.state.calories),
            image: this.state.image
        }
        console.log(foods, 'entra en form')
        this.setState({
            foods: foods.unshift(newFood),
        })
        this.setState({
            form: false
        })

    }

    render() {
        return (
            <div>
                {this.state.form &&
                    (<form onSubmit={this.handleSubmit}>
                        <InputWithLabel
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <InputWithLabel
                            name='calories'
                            value={this.state.calories}
                            onChange={this.handleChange}
                        />
                        <InputWithLabel
                            name='image'
                            value={this.state.image}
                            onChange={this.handleChange}
                        />
                        <button type="submit" className='button is-success' >Submit</button>
                    </form>)

                }
            </div>



        )
    }
}