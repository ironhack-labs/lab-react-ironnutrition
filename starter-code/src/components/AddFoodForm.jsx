import React from 'react'

const AddFoodForm = ({ isOpen, closeModal, handleSubmit, handleInput }) => {
  return (
    <div className={isOpen ? 'modal is-active' : 'modal'}>
      <div className="modal-background">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInput} />
            <input type="text" name="calories" placeholder="Calories" onChange={handleInput} />
            <input type="text" name="image" placeholder="Image" onChange={handleInput} />
            <input type="submit" value="Add Food" />
          </form>
          <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
      </div>
    </div>
  )
}

export default AddFoodForm
