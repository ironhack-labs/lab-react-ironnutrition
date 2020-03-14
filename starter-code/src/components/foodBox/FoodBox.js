import React from 'react'
import './AddForm.css'


const FoodBox = ({id, name, calories, image, quantity, handleChange, clearBlur, addToItemList}) => {
  
    return (
        <div onClick={clearBlur} id='foodBox'>
            <div  className="box">
                <article   className="media clear-blur">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} alt={name}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{name}</strong> <br />
                            <small> {calories} cal </small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input onChange={handleChange}
                                    className="input"
                                    type="number" 
                                    defaultValue='1'
                                />
                            </div>
                            <div className="control">
                                <button id={id} onClick={addToItemList} className="button is-info">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

       
        </div>
    )
}

export default FoodBox
