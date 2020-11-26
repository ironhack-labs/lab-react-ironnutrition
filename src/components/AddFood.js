import React, {useState} from 'react'

const AddFood = ({addNewFood}) => {
    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [image, setImage] = useState('')

    function handleFormSubmit(event) {
        event.preventDefault()
        const id = (Math.floor(Math.random() * 100000) + 1).toString(16)
        addNewFood({
          name,
          calories,
          image,
          id
        })
        setName('')
        setCalories('')
        setImage('')
      }

      function handleInputChange({ target: { name, value } }) {
        switch (name) {
          case 'name':
            setName(value)
            break;
          case 'calories':
            setCalories(value)
            break;
          case 'image':
            setImage(value)
            break;
    
          default:
            break;
        }
      }

    return (
        <form onSubmit={handleFormSubmit} style={{
            width: 500,
            margin: "0 auto"
        }}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input onChange={handleInputChange} name="name" className="input" type="text" placeholder="Food name" />
                </div>
            </div>
            <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                    <input onChange={handleInputChange} name="calories" className="input" type="number" min="0" placeholder="Food calories" />
                </div>
            </div>
            <div className="field">
                <label className="label">Image</label>
                <div className="control">
                    <input onChange={handleInputChange} name="image" className="input" type="text" placeholder="Food name" />
                </div>
            </div>
            <div className="field is-grouped is-grouped-right">
                <p className="control">
                    <button type="submit" className="button is-primary">
                    Submit
                    </button>
                </p>
            </div>
        </form>
    )
}

export default AddFood
