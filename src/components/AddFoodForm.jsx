import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const AddFoodForm = ({ foodList, setFoodList}) => { 
        const [name, setName] = useState("");
        const [image, setImage] = useState("");
        const [calories, setCalories] = useState("");
        const [servings, setServings] = useState("");

        const handleSubmit = event => {
            event.preventDefault()
            console.log({ name, image, calories, servings })
            setFoodList([
              ...foodList,
              {
                name: name,
                image: image,
                calories: calories,
                servings: servings
              },
            ])
            setName('');
            setImage('');
            setCalories('');
            setServings('');
          }

          <Divider>Add Food Entry</Divider>

    return (
      

        <form onSubmit={handleSubmit}>
  
        <label>Name{''}
        <Input value={name} 
        type="text"
        onChange={event => setName(parseInt(event.target.value))}
        />
        </label>

        <label>Image{''}
        <Input value={image} 
        type="text" 
        onChange={event => setImage(parseInt(event.target.value))}
        />
        </label>

        <label>Calories{''}
        <Input value={calories} 
        type="number" 
        onChange={event => setCalories(parseInt(event.target.value))}
        />
        </label>

        <label>Servings{''}
        <Input value={servings} 
        type="number" 
        onChange={event => setServings(parseInt(event.target.value))}
        />
        </label>
  
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;