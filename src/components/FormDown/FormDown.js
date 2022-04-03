import React, {useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import './FormDown.css';

const initialState = {
  name: '',
  image: '',
  calories: 0,
  quantity: 0
}


const FormDown = ({ onSubmit, onClose }) => {
  const [data, setData] = useState(initialState);
  const [showErrors, setShowErrors] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setShowErrors(false)
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, calories, image } = data

    if (name && calories && image) {
      onSubmit({
        ...data,
        id: uuidv4()
      })
      onClose()
    } else {
      setShowErrors(true)
    }
  }

  return (
      <form className='mt-4 mx-3' onSubmit={handleSubmit}>
          <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text"
             placeholder="name of food" name="name"
              onChange={handleChange}
              />
          </div>
          </div>

          <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input className="input" type="text"
              onChange={handleChange} name="image"
              />
          </div>
          </div>

          <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input className="input" type="number" 
              placeholder="0 cal" onChange={handleChange}
              min={1} name="calories"  
              />
          </div>
          </div>

          {showErrors && (
            <p className="is-danger">Invalid form</p>
          )}

          <div className="field is-grouped">
          <div className="control">
          <button type="submit" 
            className="button is-info ml-5">Submit</button>
          </div>
          </div>
          </form>
    )
   }

export default FormDown;
