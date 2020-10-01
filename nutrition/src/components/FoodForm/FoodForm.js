import React, {Component} from 'react'

class FoodForm extends Component {

        constructor(){
            super()
            this.state = {
                name: '',
                calories: '',
                image: '',
                quantity: 0,
                id: Math.floor(Math.random() * 3000)

            }
        }
        handleInputChange = elm => {
            let {name} = elm.target
            let value = elm.target.value
            this.setState({[name]: value})
        }

        handleSubmit = elem => {

            elem.preventDefault()

            this.props.addFood(this.state)

            this.setState({
                name: '',
                calories: '',
                image: '',
                quantity: 0,
                id: Math.floor(Math.random() * 3000)
            })
        }

        render(){

            return(
            <div className="boxForm">
                <h2>Add Food</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Spaguetti with cheese" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </div>
                    </div>
                    <div className="field">
                        <label className="label">Calories</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="600" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                            </div>
                    </div>
                    <div className="field">
                        <label className="label">Image</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="url..." name="image" value={this.state.image} onChange={this.handleInputChange} />
                            </div>
                    </div>
                    <div className="control">
                        <button className="button is-info">Submit</button>
                    </div>
                </form>
            </div>    

            )
        }

}

export default FoodForm
