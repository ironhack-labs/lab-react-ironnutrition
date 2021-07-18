import React, { Component } from 'react'
import 'bulma/css/bulma.css';

 class AddForm extends Component {


    render() {

        const { onAddFood } = this.props

        return (
            
                <form onSubmit={ onAddFood } noValidate autoComplete="off">

                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input name="name" class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Number</label>
                        <div class="control">
                            <input name="quantity" class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Calories</label>
                        <div class="control">
                            <input name="calories" class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <button type="submit">
                        Add
                    </button>

                </form>
           
        )
    }
}

export default AddForm 