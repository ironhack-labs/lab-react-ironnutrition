import React from 'react';

const FoodBox = (props) => {
    return(
        <div>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={props.image} alt={props.name}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{props.name}</strong> <br />
                                <small>{props.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input id={props.name} className="input" type="number" name="sum" value="1" onChange={()=>{console.log('hola')}}/>
                            </div>
                            <div className="control">
                                <button onClick={()=>{props.onSumChange(document.getElementById(props.name),props.name, props.calories)}} className="button is-info">
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

export default FoodBox;