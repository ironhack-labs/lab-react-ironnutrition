import React, { Component } from 'react';


export default class AddForm extends Component {
    state = {
        
    }

    render() {
        return (
            <div>
                 <button onClick={this.props.toggleHidden}>
                    {this.props.isHidden ? 'Add' : 'Hide'}
                </button>
                {this.props.showForm()} 
            </div>
        )
    }


}