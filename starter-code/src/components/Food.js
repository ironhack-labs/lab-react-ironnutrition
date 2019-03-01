import React from 'react';

const Food = (props) => {
    
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                    <img alt={props.info.name} src={props.info.image} />
                    </figure>
                    {props.info.name}
                </div>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong></strong> <br />
                        <small>{props.info.calories} Cal</small>
                    </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                    <div className="control">
                        <input
                        className="input"
                        type="number"
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">+</button>
                    </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Food;