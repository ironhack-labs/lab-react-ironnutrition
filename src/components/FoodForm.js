import React, {useState} from 'react';

export const FoodForm = ({pushFood}) => {

    const [name, setName]= useState('')
    const [calories, setCalories]= useState(0)
    const [image, setImage]= useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        pushFood({name, calories, image})
        setName('')
        setCalories(0)
        setImage('')
    }

 return (<>
 <form onSubmit={handleSubmit}>
    <input
        className='input'
        type='text'
        name='name'
        valeu={name}
        placehoIder='tomato'
        onChange={(e)=>{setName(e.target.value)}}
     />
     <input
        className='input'
        type='number'
        name='calories'
        value={calories}
        placehoIder='100'
        onChange={(e) =>{setcalories(Number(e.target.valeu))}}
     />
      <input
        className='input'
        type='text'
        name='image'
        placeholder= 'image url'
        onChange={ (e) =>{setImage(e.target.value)}}
     />
    <button className='button'>Add</button>
 </form>  
</>);
};