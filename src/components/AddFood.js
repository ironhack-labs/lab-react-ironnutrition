import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function AddFood(props){
    let formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return (
        <Form onSubmit = {props.onAdd} style = {formStyle}>
            <input name='name' type='text' placeholder='name of the food'></input>
            <input name='calories' type='text' placeholder='number of calories'></input>
            <input name='image' type='text' placeholder='https://i.imgur.com/hGraGyR.jpg'></input>
            <Button type='submit'>Add Food</Button>
        </Form>
    )
}

export default AddFood;