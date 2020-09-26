import React from 'react';

class TodayFood extends React.Component {

    render(){
        const totalCalories = this.props.todayFood.reduce((acc, element) => acc + element.calories, 0)
        return(
            <div>
      <h1> Today's Food </h1>
      <ul>
        {this.props.todayFood.map((element, index) => {
          return (
              <div>
            <li key={index}>
              {element.quantity} {element.name} = {element.calories} Cal <button className="button is-small is-danger" onClick={() => this.props.handleDeleteToday(element.name)}> Delete </button>
            </li>
            </div>
          )
        })}
      </ul>
      <p> Total: {totalCalories} calories</p>
    </div>
        )
    }}
export default TodayFood