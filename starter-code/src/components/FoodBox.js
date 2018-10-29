import React from 'react';

const FoodBox = (props) => {
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
                    value="1"
                />
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
    )
};

export default FoodBox;

{/* <div  className="movies-list-item">  <button onClick={props.clickToDelete}>Delete</button>
<h2>{props.title}</h2>
<p>Director: {props.director}</p>
{awardText}
{ props.hasOscars && <p>Got the Oscar Award! 😉 </p> }
{ !props.hasOscars && <p>Great movie but no Oscars! 😔 </p> }

<button onClick={props.clickToDelete}>Delete</button>
</div> */}