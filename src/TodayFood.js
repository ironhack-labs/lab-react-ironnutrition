import React from 'react';
import 'bulma/css/bulma.css';

class TodayFood extends React.Component {
  render() {
    return (
      <div>
        <h1> Today's food</h1>
        <ul>
          {this.props.todayFood.map((element, index) => {
            return (
              <li key={index}>
                {element.quantity} {element.name} = {element.calories} Cal
                <div className="control">
                  <button className="button is-danger is-outlined" onClick={() => this.props.deleteFood(element.name)} > 
                    <span>-</span>
                    <span class="icon is-small">
                    <i class="fas fa-times"></i>
                    </span>
                    </button>
                </div>
              </li>
            );
          })}
          <p> Total: {this.props.totalCalories} calories</p>
        </ul>
      </div>
    );
  }
}
export default TodayFood;