import React from "react"
import foods from './foods.json'
import ReactDOM from 'react-dom';
import FoodBox from './FoodBox'

class FoodList extends React.Component {
state = {
    foodList: []
}

render() {
    return (
        <div id="root">
    <div class="container">
      <h1 class="title">IronNutrition</h1>
      <div>
        <input type="text" class="input search-bar" name="search" placeholder="Search" value="">
      </div>
      <div class="columns">
        <div class="column">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://i.imgur.com/eTmWoAN.png">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Pizza</strong> <br>
                    <small>400 cal</small>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <div class="field has-addons">
                  <div class="control">
                    <input type="number" class="input" value="1">
                  </div>
                  <div class="control">
                    <button class="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://i.imgur.com/DupGBz5.jpg">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Salad</strong> <br>
                    <small>150 cal</small>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <div class="field has-addons">
                  <div class="control">
                    <input type="number" class="input" value="1">
                  </div>
                  <div class="control">
                    <button class="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://i.imgur.com/hGraGyR.jpg">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Sweet Potato</strong> <br>
                    <small>120 cal</small>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <div class="field has-addons">
                  <div class="control">
                    <input type="number" class="input" value="1">
                  </div>
                  <div class="control">
                    <button class="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://i.imgur.com/93ekwW0.jpg">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Gnocchi</strong> <br>
                    <small>500 cal</small>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <div class="field has-addons">
                  <div class="control">
                    <input type="number" class="input" value="1">
                  </div>
                  <div class="control">
                    <button class="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </div>
    </div>
  </div>
    )
}

export default FoodList;