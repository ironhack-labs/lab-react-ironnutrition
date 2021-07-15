import React, { Component } from 'react'

 class AddForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onAddFood}>
                <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="Name" name="name"/>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="number" placeholder="Calories" name="calories"/>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="Image URL" name="image"/>
                    </div>
                </div>
                <button type="submit" className="button is-info">
                    Submit
                </button>
                </form>
            </div>
        )
    }
}
export default AddForm;