import React, {useState} from 'react'


const CreateFoodAction = () => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');

        const newFood = {
        name: name,
        image: image,
        calories: calories,
    }

    setName('');
    setImage('');
    setCalories('');

    return (
        <div>
            <button>Create new a food</button>
            <form>
                <div>
                    <input
                        type="text" 
                        name="name" 
                        placeholder="Food name" 
                        value={name}/>
                </div>
                <div>
                    <input 
                        type="text" 
                        name="image" 
                        placeholder="Food image" 
                        value={image}/>
                </div>
                <div>
                    <input 
                        type="text" 
                        name="calories" 
                        placeholder="Food calories" 
                        value={calories}/>
                </div>
            </form>
        </div>
    );
    
};
export default CreateFoodAction;