import {useState, useEffect} from 'react';

import { Input } from 'antd';

const AddFoodForm = ({addFood}) => {
    const initialData = {
        name:'',
        image:'',
        calories:1,
        servings:1
    }

    const [formData, setFormData] = useState(initialData);

    const handleChange = (name, value) => {
        setFormData(prevState => ({...prevState, [name]:value}))
    }

    const sendFood = (e) => {
        e.preventDefault();

        addFood(formData);
        setFormData(initialData);
    }

    //useEffect mounting
    //El array vacio es muy importante para un useEffect, este indica que solo se active una vez
    //Si el array contiene una variable, este estara a la espera de un cambio de esa variable para ejecutarse nuevamente
    //Si no colocamos los [] el useEffect se estara activando n cantidad de veces
    useEffect(() => {
        console.log('Me estoy ejecutando')

    }, [])
    //unmounting
    useEffect(()=>{
        console.log('Dentro del form para el food')

        //obligatorio el return para el unmounting
        return ()=>{
            console.log('Me wow a morir bye :(');
        }
    },[])

    //Por default trae el mounting/updating
    useEffect(()=> {
        console.log('Cantidad de comida',formData.length)
    }, [formData.length])
    return(
        <>
        <h2>Add Food Entry</h2>
        <form onSubmit={sendFood}>
            <div>
                <label>Name</label>
            </div>
            <Input placeholder="Name" value={formData.name} style={{width: '95%'}} name='name' onChange={(event)=> {handleChange("name", event.target.value)}}/>
            <div>
                <label>Image</label>
            </div>
            <Input placeholder="Image" value={formData.image} style={{width: '95%'}} name='image' onChange={(event)=> {handleChange('image',event.target.value)}}/>
            <label>Calories</label>
            <Input type='number' value={formData.calories} style={{width: '95%'}} name='calories' onChange={(event)=> {handleChange('calories',event.target.value)}}/>
            <label>Servings</label>
            <Input type='number' value={formData.servings} style={{width: '95%'}} name='servings' onChange={(event)=> {handleChange('servings',event.target.value)}}/>
            <button className='btn' type="primary">Create</button>
        </form>
        </>
    );
};

export default AddFoodForm;