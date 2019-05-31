import React from 'react';
import FoodBox from './FoodBox';
import ListDiet from './ListDiet';

class ListFoodBox extends React.Component {

  state={
    foods:this.props.foods,
    selectedFood:[]
  }

  selectedFood = (a,i) => {
    const copy = this.state.selectedFood
    copy.push(a)
    this.setState({
      selectedFood:copy
    })
    this.countQuantiy(i)
  }

  countQuantiy = (i) => {
    return i;
  }

  render(){
    return (
      <div>
        {
          this.props.foods.map((element,index) => {
            return <FoodBox key={index} i={index} element={element} select={this.state.selectedFood} selection={this.selectedFood}/>
          }) 
        }
        {
          this.state.selectedFood.map((element,index) => {
            return <ListDiet key={index} element={element}/>
          }) 
        }
        </div>
    )
  }
}

export default ListFoodBox;