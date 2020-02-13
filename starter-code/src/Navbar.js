import React, { Component } from "react";
import Buttons from "./Buttons";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://riverapecunia.com">
              <img
                src="https://blog.ironhack.com/wp-content/uploads/2018/09/ironhack-logo.png"
                height="500"
              />
            </a>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://riverapecunia.com">
                IronNutrition
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <span>
                      <Buttons
                        btnType="button is-rounded is-info"
                        btnText="Login"
                      />
                    </span>
                  </p>
                  {/* <p className="control">
                    <span>
                      <Buttons actions={this.props.toggleFoodForm} btnType="button is-primary" btnText="+ Add New Food"/>
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
