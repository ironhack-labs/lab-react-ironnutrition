import React, {Component} from "react";

export default class MyButton extends Component {
    render() {
        return (
            
            <button onClick={this.props.action}>{this.props.text}</button>
        )
    }
}
