import React, {Component} from "react";
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            calories: "",
            image: "",
            quantity: 0
         }
    }

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: "",
            calories: "",
            image:""
        })
        this.props.hideForm()
    } 

    render() { 
        return ( 
            <div>
                <form onSubmit={(e) => {this.handleSubmit(e)}} className="form">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input name="name" class="input" type="text" onChange={ e =>this.handleChange(e)} value={this.state.name}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Calories</label>
                        <div class="control">
                            <input name="calories" class="input" type="text" onChange={e => this.handleChange(e)} value={this.state.calories}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Image Url</label>
                        <div class="control">
                            <input name="image" class="input" type="text" onChange={e => this.handleChange(e)} value={this.state.image} />
                        </div>
                    </div>
                    <div class="control">
                        <button type="submit" class="button is-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;