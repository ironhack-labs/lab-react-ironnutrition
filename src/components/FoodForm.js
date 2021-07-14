import React from 'react';
import { Button, TextField } from "@material-ui/core";
import './FoodForm.css'


function FoodForm({onCreateFood}) {
    return (
        <form onSubmit={onCreateFood} className="foodform-container">
            <TextField label="Name" name="name" />
            <TextField label="Calories" type="number" name="calories"/>
            <TextField label="Image" name="image" placeholder="Pass in image-url" />
            <Button type="submit" variant="contained" color="primary">Add the Food</Button>
        </form>
    )
}

export default FoodForm
