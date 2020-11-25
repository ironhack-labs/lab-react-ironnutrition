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
                    addNewFood({...values})
                    resetForm()
                }}
                <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Pizza" />
        <label htmlFor="calories">Calories</label>
        <Field id="calories" name="calories" placeholder="400" />
        <label htmlFor="hasOscars">Has Oscars</label>
        <Field type='checkbox' id="hasOscars" name="hasOscars" placeholder="9.2" />
        <label htmlFor="IMDbRating">IMDbRating</label>
        <Field id="IMDbRating" name="IMDbRating" placeholder="9.2" />
        <button type='submit'>Add</button>
      </Form>

            </Formik>
        </div>
    )
}
