import React from 'react';

export default class Input extends React.Component {
    state = {
        quantity: this.props.type == "number" ? 1 : ""
    }
    myFunction = (e) => {
        if (this.props.type == "number") {
            this.setState({
                ...this.state,
                quantity: +e.target.value
            })
            this.props.function(e)
            
        } else {
            this.setState({
                ...this.state,
                quantity: e.target.value
            })
            this.props.function(e)
        }
    }
    render() {
        return (
            <input idx={this.props.idx} className="input" min={this.props.min} placeholder={this.props.placeholder} type={this.props.type} value={this.state.quantity} onChange={(e) => this.myFunction(e)} name={this.props.children} />
        )

    }
}