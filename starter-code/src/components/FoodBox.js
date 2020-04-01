import React, { Component } from 'react'

const FoodBox = (props) => {
    return (
        <div>
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                {/* <img src="https://i.imgur.com/eTmWoAN.png" /> */}
                                <img src={props.image} alt=""/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    {/* <strong>Pizza</strong> <br />
                                    <small>400 cal</small> */}
                                    <strong>{props.name}</strong> <br />
                                    <small>{props.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        value={props.quantity}                                    />
                                </div>
                                <div className="control">
                                    <button className="button is-info">
                                        +
          </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
        
            
        </div>
    );
                                };
                                

export default FoodBox
