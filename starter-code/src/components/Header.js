import React from "react";
import Modal from "./Modal";

export const Header = ({addFood}) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-four-fifths">
              <h1 className="title">IronNutrition</h1>
              <h2 className="subtitle">
                Eat smart!
                <span role="img" aria-label="food">
                  🍓
                </span>
              </h2>
            </div>
            <div className="column is-mobile">
            <Modal addFood={newFood => addFood(newFood)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
