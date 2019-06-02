import React from 'react';
import FoodBox from './FoodBox';
import ListDiet from './ListDiet';

class ListFoodBox extends React.Component {

  state={
    selectedFood:[],
    sumCal: 0
  }

  selectedFood = (a) => {
    const copy = this.state.selectedFood
    copy.includes(a) === false ? copy.push(a) : '' 
    this.setState({
      selectedFood:copy
    })
  }

  sumCal = (sumTotal) => {
    this.setState({
      sumCal: this.state.sumCal + sumTotal 
    })
  }

  deleteFood = (index) => {
    const elementDeleted = this.state.selectedFood.splice(index,1)
    this.setState({
      selectedFood:this.state.selectedFood
    })
    this.sumCal(- elementDeleted[0].calories)
  }

  render(){
    return (
      <div className="columns">
        <div className="column">
          {
            this.props.foods.map((element,index) => {
              return <FoodBox sumCal={this.sumCal} key={index} i={index} element={element} select={this.state.selectedFood} selection={this.selectedFood}/>
            }) 
          }
          </div>
          <div className="column">
          {
            this.state.selectedFood.map((element,index) => {
              return <ListDiet delete={this.deleteFood} key={index} element={element} index={index}/>
            }) 
          }
            <span>Total Cal:{this.state.sumCal}</span>
          </div> 
      </div>
    )
  }
}

export default ListFoodBox;