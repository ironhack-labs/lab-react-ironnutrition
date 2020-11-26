import React from 'react'
import formik, { Formik, Field, Form } from 'formik'

export default function FormFood({addNewFood}) {
    return (
        <div>
            <Formik initialValues={{
                name:"",
                calories:"",
                image:"",
                quantity:0
            }}>
                onSubmit={(values,{resetForm})=>{
                    console.log(values)
                    addNewFood({...values})
                    resetForm()
                }}
                <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Pizza" />
        <label htmlFor="calories">Calories</label>
        <Field id="calories" name="calories" placeholder="400" />
        <label htmlFor="image">ImageURL</label>
        <Field id="image" name="image" placeholder="https://i.imgur.com/eTmWoAN.png" />
        <button type='submit'>Add</button>
      </Form>

            </Formik>
        </div>
    )
}

