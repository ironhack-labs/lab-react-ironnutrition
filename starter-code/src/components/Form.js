import React from 'react'

const Form = ({isOpen, closeForm, onSubmit, handleInput}) => {
  return(
     <div className={isOpen? 'modal is-active': 'modal'}>
      <div onClick={closeForm} className="modal-background"></div>
      <div className="modal-content">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <input onChange={handleInput} type="text" name="name" placeholder="Name"/>
          <input onChange={handleInput} type="text" name="calories" placeholder="Calories"/>
          <input onChange={handleInput} type="file" name="image" placeholder="Image"/>
          <input type="submit" value="Add food"/>
          
          
        </form>
      </div>
      <button onClick={closeForm} className="modal-close is-large" aria-label="close"></button>

    </div>
  )
}



export default Form;