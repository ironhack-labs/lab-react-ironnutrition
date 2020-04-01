import React,{ useState } from 'react'

const FoodBox = (props) => {
    // console.log(props);
    const [fBox,setFBox] = useState(props.info.quantity);
// console.log(quantity);

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.info.image} alt={props.info.name}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.info.name}</strong> <br />
                            <small>{props.info.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                min="0"
                                max="20"
                                onChange={(event)=>{setFBox({name:props.info.name,calories:parseInt(props.info.calories),quantity:parseInt(event.target.value)})}}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={()=>props.list({fBox})}>+</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox;