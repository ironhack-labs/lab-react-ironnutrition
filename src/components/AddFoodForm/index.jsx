import { Divider, Input } from 'antd';
import { useEffect, useState } from 'react';

function AddFoodForm({addFood}){
    const initialData = {
        name:'',
        image:'',
        calories:0,
        servings:0
    }

    const [formData,setFormData] = useState(initialData)

    const handleChange = (name, value)=>{
        setFormData(prevState => ({...prevState, [name]: value}))

    }

    const sendFood = (e)=>{
        e.preventDefault()
        addFood(formData)
        setFormData(initialData)
    }
    //useEffect unmounting/mounting
    useEffect(()=>{
      console.log("Dentro del FORM de food")
      //cuando se muere lka funcion se ejecuta lo que va en el return
      return ()=>{
        console.log("Me voa morir bye :(");
      }

    },[])

  
    return (
    <form onSubmit={sendFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={formData.name} type="text" onChange={(event) => handleChange("name", event.target.value)} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={formData.image} type="text" onChange={(event) => handleChange("image",event.target.value)} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={formData.calories} type="number" onChange={(event) => handleChange("calories",event.target.value)} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={formData.servings} type="number" onChange={(event) => handleChange("servings",event.target.value)} />

      <button type="submit">Create</button>
    </form>
  );

}

export default AddFoodForm;