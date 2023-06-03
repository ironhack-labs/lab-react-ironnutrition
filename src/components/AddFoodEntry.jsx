import { Divider, Input } from 'antd';
import { useState } from 'react';
import { Button } from 'antd';


function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    const [hidden, setHidden] = useState(true)

    const handleNameChange = e => { setName(e.target.value) }
    const handleImageChange = e => { setImage(e.target.value) }
    const handleCaloriesChange = e => { setCalories(e.target.value)}
    const handleServingsChange = e => { setServings(e.target.value)}
    const changeHidden= ()=> {setHidden(!hidden)}

    return hidden ? <Button onClick={changeHidden}> Add New Food </Button> : (

        <div>
            <form>
                <Divider>Add Food Entry</Divider>

                <label>Name</label>
                <Input value={name} type="text" onChange={handleNameChange} />

                <label>Image</label>
                <Input value={image} type="text" onChange={handleImageChange} />


                <label>Calories</label>
                <Input value={calories} type="number" min={0} onChange={handleCaloriesChange} />


                <label>Servings</label>
                <Input value={servings} type="number" min={0} onChange={handleServingsChange} />

                <button onClick={
                    (e) => {
                        e.preventDefault()
                        props.add({ name, image, calories, servings })
                    }
                }>Create</button>
            </form>
            <Button onClick={changeHidden}> Hide form </Button> 
        </div>
    );
}

export default AddFoodForm;