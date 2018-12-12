import React from 'react'
const Form = ({ onChange, handleSubmit})=>{
    return(
        <form onSubmit={handleSubmit}>
        <input  onChange={onChange} type="text" placeholder="name" name="name"/>
        <input  onChange={onChange} type="number" placeholder="calories" name = "calories"/>
        <input onChange={onChange} type="text" placeholder="image" name="image"/>
        <input  onChange={onChange} value = "0" type = "number" placeholder="quantity" name="quantity"/>
        <input type="submit"/>
        </form>
    )
}
 export default Form; 