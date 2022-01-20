
import { useState } from "react";

const NewFoods = ({onAdd}) =>{
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const[image, setImage] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!name){
            alert('Please add a food')
            return
        }
        onAdd({name, calories, image});
        
        setName('');
        setImage('');
        setCalories('');
    }
return(
    <form className="add-new-food" onSubmit={onSubmit}>
    
        <div className="form">
        <label>Name</label>
        <input 
            type='text' 
            placeholder="Add Food Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="form">
        <label>Number Of Calories</label>
        <input 
            type='text' 
            placeholder="Add The Number of Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
        />
        </div>
        <div className="image">
        <input 
            type='text' 
            placeholder="Add The Image URL"
             value={image}
            onChange={(e) => setImage(e.target.value)}
        />
        </div>
        <input type='submit' value='Save Food'/>

    </form>
)
}
export default NewFoods;
