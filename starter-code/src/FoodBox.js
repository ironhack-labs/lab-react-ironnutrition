import React from "react";
// import "./FoodBox.css";


export default class FoodBox extends React.Component {
  
  render() {
    return (
      <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.image}/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> 
              <br></br>
              <small>{this.props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input type="number" className="input" value="1"/>
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
    );
  }
}


{/* <tr >
<td><img src={this.props.pictureUrl} alt="contact info"/></td>
<td>{this.props.name}</td>
<td>{this.props.popularity.toFixed(2)}</td>
<td><button classNameName="delete button" onClick={() => this.props.clickToDelete()}>Delete me</button></td>
</tr> */}