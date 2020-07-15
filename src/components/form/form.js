import React, {Component} from 'react'


class Form extends Component {
    constructor (){
        super ()
        this.state = {
            name: "",
            calories: "",
            image: ""

        }
    }
        
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
        })
    }
    
    handleInput = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name] : value})
    }
    
    // createName(e) {
    //     this.setState({
    //         name: e.target.value
    //     });
    // }

    // createCalories(e) {
    //     this.setState({
    //         calories: e.target.value
    //     })
    // }

    // createImage(e) {
    //     this.setState({
    //         image: e.target.value
    //     })
    // }

    render () {
        return (
            <> 
                <form onSubmit={this.handleFormSubmit}>
                <div class="field">
                <div class="control">
                    <label>Nombre</label>
                    <input className="input is-primary" name='name' type="text" value={this.state.name} placeholder="Primary input" onChange={this.handleInput}/>
                    </div>
                </div>

                <div class="field">
                <div class="control">
                    <label>Calorias</label>
                    <input className="input is-primary" name="calories"type="text" value={this.state.calories} placeholder="Primary input" onChange={this.handleInput}/>
                    </div>
                </div>
                
                <div class="field">
                <div class="control">
                    <label>Imagen</label>
                    <input className="input is-primary" name="image" type="text" value={this.state.image} placeholder="Primary input" onChange={this.handleInput}/>
                    </div>
                </div>
                <button >Créalo!</button>
                </form>
            </> 
        )
    }
}

export default Form