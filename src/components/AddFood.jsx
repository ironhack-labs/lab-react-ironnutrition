import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';

class AddFood extends Component {

    // Props will look like this
    /*

    this.props = {
        onAddFood: func
    }

    */


    render() {
        return (
            <form onSubmit={this.props.onAddFood} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name" name="name" />
                <TextField id="standard-basic" label="Calories" name="calories" />
                <Button type="submit" variant="contained" color="primary">
                    Insert
                </Button>
            </form>
        )
    }
}

export default AddFood