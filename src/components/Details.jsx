import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';


class Details extends Component {





        render() {
                const { myFood, handleAddTotal } = this.props
                return (
                        <form onSubmit={(event) => { handleAddTotal(event, myFood) }}
                                noValidate autoComplete="off">
                                <p>{myFood.name}</p>
                                <h4> {myFood.calories}</h4>



                                <TextField name="quantity" id="standard-basic" label="Quantity" />
                                <Button type="submit" variant="contained" color="primary">
                                        Add
                                </Button>
                        </form>
                )


        }
}


export default Details