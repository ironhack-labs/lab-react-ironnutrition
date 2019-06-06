import React from 'react';

class ListElement extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }


  render() {
    console.log(this.props.foods)


    console.log(this.props.foods.reduce((a, b) => a + parseInt(b.calories), 0))
    return (

      <div>
        {this.props.foods.map((food, idx) => {
          return <div><li key={idx}>Name: {food.name} <br></br>   Amount of calories: {food.calories}</li><br></br></div>
        })}
        < div > Total sum of calories: {this.props.foods.reduce((a, b) => a + parseInt(b.calories), 0)}</div >
      </div>
    )
  }

}

export default ListElement