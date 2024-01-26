import React from 'react'
import { useState } from 'react'



function AddFoodForm(props) {

    const [foodName,setFoodName]= useState('')
    const [image,setImage]= useState('')
    const [calories,setCalories]= useState(0)
    const [servings,setServings]= useState(0)

    function handleSubmit(e){
        e.preventDefault()
        const newFood= {name:foodName,calories:calories,image:image,servings:servings}
        console.log(newFood)
        props.setFood([...props.food,newFood])
        setFoodName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }

  return (
    <div className='AddMovie' >
    <form onSubmit={handleSubmit} style={{display:'flex',flexWrap:'wrap', flexDirection:'column'}}>
    <h1 style={{fontSize:'22px'}}>Add Food Entry</h1>
        <label style={{textAlign:'left', fontSize:'18px', fontWeight:'bold'}}>Name</label><input style={{padding:'4px', borderColor:'lightgrey', margin:'10px 0px'}}name='name' type='text' onChange={(e)=>{setFoodName(e.target.value)}} value={foodName}/>    
        <label style={{textAlign:'left', fontSize:'18px', fontWeight:'bold'}}>Image</label> <input style={{padding:'4px', borderColor:'lightgrey', margin:'10px 0px'}} name='image' type='text' onChange={(e)=>{setImage(e.target.value)}} value={image}/> 
        <label style={{textAlign:'left', fontSize:'18px', fontWeight:'bold'}}>Calories</label><input style={{padding:'4px', borderColor:'lightgrey', margin:'10px 0px'}} name='calories' type='number' onChange={(e)=>{setCalories(e.target.value)}} value={calories}/> 
        <label style={{textAlign:'left', fontSize:'18px', fontWeight:'bold'}}>Serving</label><input style={{padding:'4px', borderColor:'lightgrey', margin:'10px 0px'}} name= 'servings' type='number' onChange={(e)=>{setServings(e.target.value)}} value={servings}/>
    <button style={{border:'solid 1px',backgroundColor:'#ADD8E6', textAlign:'center', margin:'10px 0px'}}
    onMouseOver={(e) => e.target.style.backgroundColor = '#87CEEB'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#ADD8E6'}>Create</button>
    </form>
    </div>
  )
}

export default AddFoodForm
