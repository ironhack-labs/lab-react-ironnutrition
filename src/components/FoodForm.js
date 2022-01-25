import React, { useState } from "react";

//cada input é/tem um state, então preciso fazer cada state, cada coisa que muda (renderiza novamente)

//const [state, função de mudança do state(setar)]: 

const FoodForm = ({pushNewFood}) => {

    const [name,setName] = useState('');   //nome da comida começa vazio, para usuário preencher nesse formulario
    const [image,setImage] = useState('');   //mesmo caso do name]
    const [calories,setCalories] = useState(0);  //é number,  e começa com zero

    const handleSubmit = (e) => {
        e.preventDefault();
        pushNewFood({name, calories, image});
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                className="input" 
                type="text" 
                value={name} 
                placeholder="Food Name Here"
                onChange={(e) => {setName(e.target.value)}} 

            />
            {/*renderização, mudança de estado através do evento*/}
            
            <input 
                className="input" 
                type="text" 
                value={image} 
                placeholder="Image Here"
                onChange={(e) => {setImage(e.target.value)}}
            />
            
            <input 
                className="input" 
                type="text" 
                value={calories} 
                placeholder= "Calories Quantity Here"
                onChange={(e) => {setCalories (Number(e.target.value))}}
            />
                 
            <button className="button">Submit</button>     
        </form>
        
        
    );
};

export default FoodForm;
