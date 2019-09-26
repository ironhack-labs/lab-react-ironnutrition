import React from 'react'

const AddFoodForm = ({ isOpen, closeModal, handleSubmit, handleInput }) => {
  return (
    <div className={isOpen ? 'modal is-active' : 'modal'}>
      <div className='modal-background' onClick={closeModal}></div>
      <div className='modal-content'>
        <div className='card'>
          <div className='card-content'>
            <h2 className='title'>Add a new food</h2>
            <p className='subtitle'>Provide a valid url pls</p>
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <div className='control'>
                  <input className='input' type='text' name='name' placeholder='Name' onChange={handleInput} />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input className='input' type='text' name='calories' placeholder='Calories' onChange={handleInput} />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input className='input' type='text' name='image' placeholder='Image URL' onChange={handleInput} />
                </div>
              </div>
              <button className='button is-primary' type='submit'>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      <button className='modal-close is-large' aria-label='close' onClick={closeModal}></button>
    </div>
  )
}

export default AddFoodForm
