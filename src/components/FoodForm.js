// import React, {useState} from 'react'
// import formik, { Formik, Field, Form } from 'formik'

// export default function FoodForm({addNewFood}) {

//   const [values, setValues] = useState({
//       name: '',
//       calories: '',
//       image: '',
//       quantity: 0
//   })

//   const inputChangeHandler = (el) => {
//     let { name, value} = el.target
//     setValues({...values, [name]: value})
//   }

//   const handleFormSubmission = (el) => {
//     el.preventDefault()
//     addForm(values)
//     toggleForm()
//     setValues({
//       name: '',
//       calories: '',
//       image: '',
//       quantity: 0
//     })
//   }
//   return (
//     <form onSubmit={handleFormSubmission}>
//             console.log(values)
//             addNewFood({...values})
//             resetForm()
//         }}
//         <Form>
//           <label htmlFor="name">Name</label>
//           <Field id="name" name="name" placeholder="Pizza" />
//           <label htmlFor="calories">Calories</label>
//           <Field id="calories" name="calories" placeholder="400" />
//           <label htmlFor="image">ImageURL</label>
//           <Field id="image" name="image" placeholder="https://i.imgur.com/eTmWoAN.png" />
//           <button type='submit'>Add</button>
//     </form>
//   )
// }