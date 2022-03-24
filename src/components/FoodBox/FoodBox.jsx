import './FoodBox.scss'
import React from 'react';

const FoodBox = ({ food }) => {
    return(
        <div className='col-6'>
            <div className="card">
                <div className='row no-gutters'>
                    <div className="col-4 card-image-container">
                        <img  className='card-image' src="https://i.imgur.com/eTmWoAN.png" alt='food item' />
                    </div>
                <div className="col-8">
                    <div className='card-body'>
                        <div className='body-text'>
                            <h2 className="card-title"> <strong>Pizza</strong></h2>
                            <p className='text-muted'>400 cal</p>
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