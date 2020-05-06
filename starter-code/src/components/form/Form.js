import React, {Component} from 'react'
import 'bulma/css/bulma.css'



class FoodForm extends Component {

    constructor() {

        super()

        this.state = {
            name: '',
            calories: '',
            image: '',
            addNewFood: true
            
        }

    }

    changeFood = e => {

        this.setState({

            [e.target.name]: e.target.value 

        })
        
    }

    handleFormSubmit = e => {

        e.preventDefault()
        this.props.pushNewFood(this.state)
        this.setState ({
            name: '',
            calories: '',
            image: '',
            addNewFood: !this.state.addNewFood
        })


        console.log(this.state)
    }




    render () {

        return (

            <div>
            {this.state.addNewFood ?  

            <form onSubmit = {this.handleFormSubmit}>
                <div className="field" >
                    <label className="label">Name</label>
                    <div className="control">
                        <input name="name" value={this.state.name} onChange={this.changeFood} className="input" type="text" />
                    </div>
                    <label className="label">Calories</label>
                    <div className="control">
                        <input name="calories" value={this.state.calories} onChange={this.changeFood} className="input" type="text" />
                    </div>
                    <label className="label">Image</label>
                    <div className="control">
                        <input name="image" value={this.state.image} onChange={this.changeFood} className="input" type="text" />
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button  type="submit" className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
            : null }

            </div>

        )
    }

}

export default FoodForm