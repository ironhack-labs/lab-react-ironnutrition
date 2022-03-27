import './FoodBox.scss'
import React from 'react';

const FoodBox = ({ name, image, calories }) => {
    return(
        <div className="col-6">
            <div className="card m-1">
                <div className='row no-gutters'>
                    <div className="col-4 card-image-container">
                        <img  className='card-image' src={image} alt='food item' />
                    </div>
                    <div className="col-8">
                        <div className='card-body'>
                            <div className='body-text'>
                                <h2 className="card-title fs-5"> <strong>{name}</strong></h2>
                                <p className='text-muted mt-3'>{calories}</p>
                            </div>

                            <div className='actions'>
                                    <p>12</p>
                                    <button className='btn btn-primary'>+</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FoodBox