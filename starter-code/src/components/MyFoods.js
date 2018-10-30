import React from 'react';

const MyFoods = (props) => {
    // let awardText;
    // if(props.hasOscars){
    //     if(props.IMDbRating >= 9){
    //         awardText = <p> WOW! Oscar Award and IMDb rating {props.IMDbRating}! </p>
    //     } else if(props.IMDbRating >= 7){
    //         awardText = <p> Got the Oscar Award and has IMDb rating {props.IMDbRating}, not bad at all! </p>
    //     }
    // } else {
    //     awardText = <p> Great movie but no Oscars! Has IMDb rating {props.IMDbRating}. </p>
    // }
    return (
    <div className="box">
        <article className="media">
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={props.image} />
            </figure>
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong>{props.name}</strong> <br />
                <small>Cal:{props.calories}</small>
                </p>
            </div>
            </div>
            <div className="media-right">
            <div className="field has-addons">
                <div className="control">
                    <p>Quantity: {props.quantity}</p>
                    <p>Total Cal: {props.calories * props.quantity}</p>
                </div>               
                        
            </div>
            <button className="button is-info" onClick={props.clickToDelete}>Delete</button>
            </div>
        </article>
    </div>
    )
};

export default MyFoods;