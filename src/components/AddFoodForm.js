import { Input, Button } from 'antd';
import { useState } from 'react';

// Iteration 2
function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
    const [showForm, setShowForm] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFoodEntry = {name, image, calories, servings};
        props.callbackToAddFoodEntry(newFoodEntry);
    }

    const hideOrShowForm = () => {
        // console.log(showForm);
        if (showForm === true) {
            // buttonDisplay = "Show Form"
            setShowForm(false);
        }
        else {
            setShowForm(true);
        }
    }

  return (
    <>
    { showForm === true &&
    <form onSubmit={handleSubmit}>
        <label> Name
            <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />
        </label>
        <label> Image
            <Input value={image} type="url" onChange={(e) => {setImage(e.target.value)}} />
        </label>
        <label> Calories
            <Input value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />
        </label>
        <label> Servings
            <Input value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} />
        </label>
        <button  >Add this</button>
    </form> }
    { showForm === true &&
        <Button onClick={() => {hideOrShowForm()}}>Hide Form</Button>
    }
    { showForm === false &&
        <Button onClick={() => {hideOrShowForm()}}>Show Form</Button>
    }
    </>
  );
}

export default AddFoodForm;