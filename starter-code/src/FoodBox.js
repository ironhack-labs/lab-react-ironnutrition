import React, { Component } from 'react';
import './App.css';






class FoodBox extends Component {



    


    render() {
      return (
        <div className="App">
       
  

  

          <div className="box all-length">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                <img src= {this.props.pictureUrl} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}</strong> <br/>
                    <small>{this.props.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input type="number" className="input" value={this.props.quantity}/>
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>    
         

      {/* <p>{this.props.quantity} </p> */}
  

                  

        </div>
      );
    }
  }
  
  export default FoodBox;