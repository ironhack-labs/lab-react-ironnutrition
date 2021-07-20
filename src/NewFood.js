import { checkPropTypes } from 'prop-types';
import React, {useState} from 'react';

function AddFood(){
    const [formState, setFormState] = useState({
        name: '',
        calories: '',
        image: '',
        quantity: ''
    })

    function handleChange(event){
        setFormState({...formState, [event.target.name] : event.target.value});
        console.log('this is the current formState', formState);
    }

    function handleOnSubmit(event){
        event.preventDefault();
        const newFood = {formState};
        console.log(newFood);
        props.addFoodHandler(formState);
    }
}

export default AddFood;