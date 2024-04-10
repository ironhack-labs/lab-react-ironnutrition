
import { useState } from 'react'


function AddFoodForm({ onCreate }) { 
  const [state, setState] = useState({
    event: {
      name: '',
      image: '',
      calories: '',
      servings: ''
    },
  })

  const handleChange = (changeEvent) => {
    const { name, value } = changeEvent.currentTarget
    setState({
      ...state,
      event: {
        ...state.event,
        [name]: value
      }
    })
  }

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault()
    onCreate(event)
    setState({
      event: {
        name: '',
        image: '',
        calories: '',
        servings: ''
      }
    })
  }

  const {event} = state

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group mb-1'>
        <span className='input-group-text'><i className='fa fa-tag fa-fw'></i></span>
        <input type='text' name='name' value={event.name} onChange={handleChange} className='form-control' placeholder='Name'></input>
      </div>

      <div className='input-group mb-1'>
        <span className='input-group-text'><i className='fa fa-picture-o fa-fw'></i></span>
        <input type='text' name='image' value={event.image} onChange={handleChange} className='form-control' placeholder='Image'></input>
      </div>
      
      <div className='input-group mb-1'>
        <span className='input-group-text'><i className='fa fa-heartbeat fa-fw'></i></span>
        <input type='text' name='calories' value={event.calories} onChange={handleChange} className='form-control' placeholder='Calories'></input>
      </div>

      <div className='input-group mb-1'>
        <span className='input-group-text'><i className='fa fa-cutlery fa-fw'></i></span>
        <input type='text' name='servings' value={event.servings} onChange={handleChange} className='form-control' placeholder='Servings'></input>
      </div>

      <button>Create</button>
    </form>
  )
}

export default AddFoodForm