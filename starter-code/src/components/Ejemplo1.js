/* import React, { Component } from "react";
import foods from "../foods.json";

const Food = foods;
class Ejemplo1 extends Component {
  render() {
    this.state = {
      query: "",
    };
    this.handleSearch = (e) => {
     
       this.rebels = foods.filter((pilot) => pilot.name.indexOf(e.target.value) > -1);
       console.log(this.rebels)



    };
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onChange={this.handleSearch}
        ></input>
        {foods.map((data, i) => {
          return (
            <div key={i}>
              <div>
                <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={data.image} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{data.name}</strong> <br />
                          <small>{data.name} cal </small>
                        </p>
                      </div
                    </div>
                    <div className="media-right">
                      <div className="field has-addons">
                        <div className="control">
                          <input
                            className="input"
                            type="number" e
                          />
                        </div>
                        <div className="control">
                          <button className="button is-info">+</button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Ejemplo1;
 */