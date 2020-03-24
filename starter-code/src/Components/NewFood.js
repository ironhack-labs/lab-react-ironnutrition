import React, { useState, useContext } from 'react';
import { Button } from 'react-bulma-components';
import { Field, Control, Input, Label } from 'react-bulma-components/lib/components/form';
import {FoodContext} from './../contexts/FoodContext';
import styled from 'styled-components';

const StyledButton = styled(Button )`
  margin-bottom: 30px;
`;

const NewFood = () => {
  const {addFood} = useContext(FoodContext);
  const [formActive, setFormActive] = useState(false);
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleActiveForm = () =>{
    setFormActive(!formActive);
    cleanForm();
  }

  const handleSubmitForm = () =>{
    addFood({name, calories, image});
    setFormActive(false);
    cleanForm();
  }

  const cleanForm = () => {
    setName('');
    setCalories('');
    setImage('');
  }

  if(!formActive) {
    return <Button color="primary" onClick={()=>handleActiveForm()}>Add Food</Button>;
  } else {
    return(
      <div>
        <StyledButton color="primary" onClick={()=>handleActiveForm()}>Cancel</StyledButton>

        <Field>
          <Label>Food</Label>
          <Control>
            <Input type='text' placeholder="Food name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </Control>
        </Field>

        <Field>
          <Label>Calories</Label>
          <Control>
            <Input type='number' placeholder="Calories" value={calories} onChange={(e)=>setCalories(e.target.value)}/>
          </Control>
        </Field>

        <Field>
          <Label>Image</Label>
          <Control>
            <Input type='text' placeholder="Image url" value={image} onChange={(e)=>setImage(e.target.value)}/>
          </Control>
        </Field>

          <Button color="primary" onClick={()=>handleSubmitForm()}>Add</Button>

      </div>

    );
  }
  
}

export default NewFood;