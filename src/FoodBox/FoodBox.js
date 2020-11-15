import React, { useState } from 'react';

let todayList = [];
let alter = '';

function FoodBox(props) {
  const [add, setAdd] = useState(props);

  function handleChange(event) {
    const { name, value } = event.target;
    setAdd({ ...add, [name]: Number(value) });
  }

  function handleClick() {
    if (todayList.length === 0) {
    }
    checkFood(props.name);
    function checkFood(chackName) {
      if (add.qnt > 0) {
        if (
          todayList.find(function (food) {
            if (food.foodName === chackName) {
              food.foodQnt += add.qnt;
              return chackName;
            }
          })
        ) {
          alter = 'yes';
        } else {
          alter = 'no';
        }
      }
    }
    if (alter === 'no') {
      if (add.qnt > 0) {
        todayList.push({
          foodName: props.name,
          foodCal: props.cal,
          foodQnt: add.qnt,
        });
      }
    }
    props.dayFood({ list: todayList });
  }

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
              <small> {props.cal}cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                name="qnt"
                type="number"
                value={add.qnt}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button onClick={handleClick} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
