import React from 'react';


const food = ({name,calories,image,quantity}) =>{

   const handleChange = e => {
        let { name, value } = e.target
        quantity.setState({ [name]: value })}

    return (
    <div className="box col-md-12">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{name}</strong> <br />
                        <small>{calories} cal</small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            value={quantity}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="control">
                        <button  className="button is-info" onClick={this.showForm}>+</button>
                    </div>
                </div>
            </div>
        </article>
        <div className='col-md-6'>
       
        </div>
    </div>)
    
}




export default food