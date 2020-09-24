import React from 'react';
import './style.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

class Foods extends React.Component {
  state = {
    //state
  };

  render() {
    return (
      <>
        {foods.map((eachFood, index) => {
          return (
            <>
              <div key={index} className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={eachFood.image} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{eachFood.name}</strong> <br />
                        <small>{eachFood.calories} cal</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input className="input" type="number" value="1" />
                      </div>
                      <div className="control">
                        <button className="button is-info">+</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </>
          );
        })}

        {/* hello */}
      </>
    );
  }
}

export default Foods;
