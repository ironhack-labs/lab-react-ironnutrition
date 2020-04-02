import React, { useState, useContext } from "react";
import {FoodContext} from "./FoodContext";
import { Button } from 'react-bulma-components';
import { Field, Control, Input, Label } from 'react-bulma-components/lib/components/form';

const CreateFood = () => {
    const {addFood} = useContext(FoodContext);
    const [formActive, setFormActive] = useState(false);
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState('');

    const handleFormSubmit = () =>{
        addFood({name, calories, image});
        setFormActive(false);
        cleanForm();
      }

    const handleActiveForm = () =>{
        setFormActive(!formActive);
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
                <Button color="primary" onClick={()=>handleActiveForm()}>Cancel</Button>
      
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
      
              <Field>
                <Control>
                  <Button type="primary" onClick={()=>handleFormSubmit()}>Add</Button>
                </Control>
              </Field>
            </div>
          );
    }
}

export default CreateFood;
