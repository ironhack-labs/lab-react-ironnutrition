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
      <li key={f.name}>
      <button type="button" className="button btn-li is-small is-danger" data-item={f.name} onClick={this.deleteFood} >x</button>
      {f.quantity} {f.name} = {f.quantity * f.calories} cal
      </li>
    ));
    const total= this.props.foods.reduce((acc, f) => f.quantity * f.calories + acc, 0);

  return (
    <article className="media">
      <div className="field is-horizontal">
        <div className="box">
          <div className="media-content">
            <div className="content">
              <h1>Today's food</h1>
            </div>
              <ul>{list}</ul>
            <div className="content">
              <h3>Total: {total} cal</h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
};
}

export default FoodMenu