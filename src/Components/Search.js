import React, {useState} from 'react'
import  { Formik, Field, Form } from 'formik'

function Search({searchFood}){
    return (
        <Formik initialValues={{
            search:'',
        }}

        onSubmit={(values) => { 
        const id = (Math.floor(Math.random() * 100000) + 1).toString(16)
        searchFood({ ...values, id })

        }}
    >
    <Form>
        <label htmlFor="title">Search</label>
        <Field id="search" name="search" placeholder="search" />
        <br/>
        <button type='submit'>Search</button>
        </Form>
    </Formik>
)
}
export default Search
