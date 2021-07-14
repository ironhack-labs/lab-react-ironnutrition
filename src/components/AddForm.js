import React, { Component } from 'react';


class AddForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onAddFood} noValidate autoComplete="off">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Name" name="name" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Calories</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Number of calories" name="calories"  />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Image</label>
                    <div class="control">
                        <input class="input" type="url" placeholder="Image URL" name="image" />
                    </div>
                </div>
                <input class="button" type="submit" value="Submit input" />

            </form>
        )
    }
}
export default AddForm;
