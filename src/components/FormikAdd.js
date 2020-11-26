import React, { useState } from 'react'
import formik, { Formik, Field, Form } from 'formik'

function FormikAdd({addNewFood}) {
    const[showForm, setShowForm] = useState(true)
  return (
    <Formik initialValues={{
      name: '',
      calories: '',
      image: ''
    }}
      onSubmit={(values, { resetForm }) => {
        const id = (Math.floor(Math.random() * 100000) + 1).toString(16)
        addNewFood({ ...values, id })
        console.log(values)
        resetForm()
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Food's name" />
        <label htmlFor="calories">Calories</label>
        <Field id="calories" name="calories" placeholder="Calories"  />
        <label htmlFor="image">image</label>
        <Field id="image" name="image" placeholder="Image"  />
        <button type='submit' onClick={() => 
                setShowForm(!showForm)}>Add</button>
      </Form>
    </Formik>
  )
}

export default FormikAdd
