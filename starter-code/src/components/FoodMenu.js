import React, {Component} from 'react';

class FoodMenu extends Component {

  constructor(props){
    super(props)

    this.state = {
      foodDelete: '',
    };
  }
  deleteFood = (event) => {
    this.setState({ 
      foodDelete : event.currentTarget.dataset.item
       }, () => this.props.clickDelete(this.state.foodDelete));

      //  this.setState({ ...this.props.clickDelete(this.state.foodDelete),
      //    foodDelete : event.currentTarget.dataset.item 
      //     }); preguntar mañana
  }

  render(){
    const list = this.props.foods.filter(f => f.quantity > 0).map(f => (
      <li key={f.name}>{f.quantity} {f.name} = {f.quantity * f.calories} cal
      <button type="button" className="button is-small is-danger" data-item={f.name} onClick={this.deleteFood} >x</button>
      </li>
    ));
    const total= this.props.foods.reduce((acc, f) => f.quantity * f.calories + acc, 0);

  return (
    <div>
      <h1>Today's food</h1>
      <ul>{list}</ul>
      Total: {total} cal
    </div>
  )
};
}

export default FoodMenu