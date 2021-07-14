import React, { Component } from 'react'
import 'bulma/css/bulma.css';

class AddForm extends Component {
    // Props will look like this
    /*

    this.props = {
        onAddBook: func
    }

    */
    render() {
        return (
            <form onSubmit={ this.props.onAddBook } noValidate autoComplete="off">
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value="1" name="quantity"/>
                        </div>
                        <div className="control">
                        <button type="submit" className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
            </form>
        )
    }
}

export default AddForm