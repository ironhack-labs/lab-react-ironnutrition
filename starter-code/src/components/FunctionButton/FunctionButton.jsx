import React from 'react';

export default class FunctionButton extends React.Component {
    render() {
        return <button className={this.props.className} onClick={() => this.props.function()}>{this.props.children}</button>
    }
}