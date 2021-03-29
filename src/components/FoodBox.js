import React from 'react'

const FoodBox = (props) => {

    const onQuantityChange = (event) => {
        console.log(event.target.value)
        props.onChange({ ...props, quantity: event.target.value });
    }

    const onClick = () => {
        props.onChange({...props, quantity:  Number(props.quantity) + 1})
    }

            return (
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
                        <input className="input" type="number" value={ props.quantity } onChange={ onQuantityChange } />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={ onClick }>
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
            )
}

export default FoodBox