import React, { Component } from "react";


class Button extends Component {

    render() {
        return (
            <div class="control">
                <button 
                    onClick={this.isClick}
                    class="button is-primary">create food</button>
            </div>
        )
    }

}

export default Button;