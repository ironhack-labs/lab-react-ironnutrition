import React from "react";
import TodayFood from "./TodayFood";



class FoodBox extends React.Component {

constructor(props){
super(props);

this.state = {
name: "",
}

}

Addbutton(event){
    this.setState({ name: event.target.name },
        () => {  
        const { clickedFood } = this.props;
        clickedFood(this.state);
        console.log("inside add button",this.state); } )  
    }


render(){

const {name, image, calories} = this.props;

return(

<div className="box"  >
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
          <small>{calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <p>1</p>
        </div>
        <div className="control">
          <button name={name} className="button is-info" onClick={(event)=> {this.Addbutton(event)}} >
            +
          </button>
        </div>
      </div>
    </div>
  </article>

  
</div>


    )
}
}


export default FoodBox;