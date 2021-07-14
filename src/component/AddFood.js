import React, {Component} from 'react'
import {TextField, Button} from '@material-ui/core';


export default class AddFood extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onAddFood} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="name" name="name" />
                    <TextField id="standard-number" label="calories" name="calories" />
                    <TextField id="standard-number" label="quantity" name="quantity" />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}
