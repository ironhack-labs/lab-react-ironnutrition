import React, { useState } from 'react';

let todayList = [];
let alter = '';
let qntFoods = 0;

function FoodBox(props) {
  const [add, setAdd] = useState(props);

  function handleChange(event) {
    const { name, value } = event.target;
    setAdd({ ...add, [name]: Number(value) });
  }

  function handleClick() {
    if (todayList.length === 0) {
      qntFoods = 0;
    }
    if (add.qnt > 0 && todayList.length === 0) {
      todayList.push({
        foodName: props.name,
        foodCal: props.cal,
        foodQnt: add.qnt,
      });
      qntFoods += 1;
    }
    checkFood(props.name);
    function checkFood(chackName) {
      if (add.qnt > 0) {
        qntFoods += 1;
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
    if (alter === 'yes') {
      if (todayList.length === 1) {
        todayList.find(function (food) {
          if (food.foodName === props.name && qntFoods === 2) {
            food.foodQnt = add.qnt;
          }
        });
      }
    } else {
      if (add.qnt > 0) {
        qntFoods += 1;
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
