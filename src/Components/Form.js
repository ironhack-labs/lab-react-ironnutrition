import React, {useState, useEffect} from 'react'
import  { Formik, Field, Form } from 'formik'

function FormAdd({addNewFood, setForm}){
    useEffect(()=>{
    return ()=>{
    }
    }, [])

    return (
        <Formik initialValues={{
            name:'',
            calories:'',
            // image:'',
        }}
        onSubmit={(values) => {    
        const id = (Math.floor(Math.random() * 100000) + 1).toString(16)
        addNewFood({ ...values, id })
        setForm(false)
      }}
        >
        <Form>
            <label htmlFor="title">Name</label>
            <Field id="name" name="name" placeholder="Pizza" />
            <br/>
            <label htmlFor="calories">Calories</label>
            <Field id="calories" name="calories" placeholder="10 calories"  />
            {/* <img src={image} />  */}
            <br/>
            <button type='submit'>Add</button>
         </Form>
        </Formik>
    )
}
export default FormAdd
