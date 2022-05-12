import React, { useState } from 'react';
// import { useState } from "react";


function Foodbox(props) {
  let listArr = [];
  const [list, setList] = useState(listArr);

  const addToList = (name) => {
    setList((prevList) => {
      const newList = [name.name, ...prevList];
      console.log(newList);
      return newList;
    });
    // console.log(name)
    // list.push(name.name);
    // console.log(list)
  };

  return (
    <>
      {props.foodsArr.map((food) => {
        return (
          <div className="columns">
            <div className="box column">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={food.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{food.name}</strong> <br />
                      <small>{food.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value="1" />
                    </div>
                    <div className="control">
                      <button
                        className="button is-info"
                        onClick={() => {
                          addToList(food);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {console.log(list)}
            <div className="column">
              <h3>{list}</h3>
            </div>
          </div>
        );


        
      })}
    </>
  );
}

export default Foodbox;