import React, { Component } from 'react'

export default class deleteFood extends Component {
    render() {
        return (
            <div>
            <p
            onClick={() => {
              this.props.deleteItem(this.props.index);
            }}
            >
            delete
            </p>
          </div>
        )
    }
}
