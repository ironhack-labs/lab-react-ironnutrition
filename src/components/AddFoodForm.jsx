// Your code here
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Form, Divider, Input, Button } from "antd";

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = event => setName(event.target.value);
    const handleImageInput = event => setImage(event.target.value);
    const handleCaloriesInput = event => setCalories(event.target.value);
    const handleServingsInput = event => setServings(event.target.value);

    function handleSubmit(event) {
        let newUniqueID = uuidv4()

        const newFood = {
            "id": newUniqueID,
            "name": name,
            "calories": calories,
            "image": image,
            "servings": servings
        }

        props.addFoodFunction(newFood)

        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }

    return (
        <div>
            <Form onFinish={handleSubmit}>
                <Divider>Add Food Entry</Divider>
                <p>
                    <Input addonBefore="Name:" type="text" name="name" value={name} onChange={handleNameInput} autoComplete="off" />
                </p>
                <p>
                    <Input addonBefore="Image:" type="text" name="image" value={image} onChange={handleImageInput} autoComplete="off" />
                </p>
                <p>
                    <Input addonBefore="Calories:" type="number" name="calories" value={calories} onChange={handleCaloriesInput} autoComplete="off" />
                </p>
                <p>
                    <Input addonBefore="Servings:" type="number" name="servings" value={servings} onChange={handleServingsInput} autoComplete="off" />
                </p>

                <Button htmlType="submit" >Add food</Button>
            </Form>
        </div>
    );
}

export default AddFoodForm;