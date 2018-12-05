import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            address: "",
            city: "",
            postcode: "",
            haveDetailsBeenUpdated: false
        }
    }

    updateDetailsHandler = (e) => {
        e.preventDefault();
        this.setState({ ...this.state, haveDetailsBeenUpdated: true }, () => {
            this.props.submitHandler(this.state)
        })
    }

    changeAddressHandler = (e) => {
        this.setState(
            { ...this.state, address: e.target.value }
        )
    }
    changeCityHandler = (e) => {
        this.setState(
            { ...this.state, city: e.target.value }
        )
    }
    changePostcodeHandler = (e) => {
        this.setState(
            { ...this.state, postcode: e.target.value }
        )
    }

    render() {
        return (
            <form>
                <span>Esto es una regalo para Simón: {this.state.address}</span>
                <div>
                    <input type="text" value={this.state.address} onChange={this.changeAddressHandler}></input>
                    <input type="text" value={this.state.city} onChange={this.changeCityHandler}></input>
                    <input type="text" value={this.state.postcode} onChange={this.changePostcodeHandler}></input>
                </div>

                <button onClick={this.updateDetailsHandler}>Update your details</button>

                {
                    (this.state.haveDetailsBeenUpdated) ? <p style={{ color: 'green' }}>Your data has been updated</p> : ""
                }

            </form>
        )
    }
}