import React, { Component } from 'react'

export default class Button extends Component {
    constructor() {
        super()

        this.state = {
           form:false
        }
    }

    switchState = () => {
        this.setState({ form: !this.state.form })
    }

    render() {
        let showForm;

        if (this.state.form) {
            showForm = (
                <form>
                    <input label="Name" type="text" placeholder="e.g Alex Smith" />
                    <input label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <input label="contraseña" type="text" placeholder="*****" />
                </form>
            )
            console.log("open")
        } else {
            showForm = "none"
            console.log('close')
        }
        return (
            <div>
                <button onClick={this.switchState}>Switch open/close</button>
                <div style={{ display: this.showForm }}>
                    {showForm}
                </div>
            </div>
        )
    }


}