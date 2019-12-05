import React, { Component } from 'react';


class Button extends Component {

    render() {
        return (
            <div class="control">
                <button 
                onClick={this.isClicked}
                class="button is-primary">create food</button>

            </div>
        )
    }

}

export default Button;