import React from 'react'

class Tab extends React.Component {

    constructor (props){
        super (props);
        this.state = {
            dishCalories: parseInt(0)
          };
        }


    render() {
        const { name, calories, quantity, dish } = this.props;
        this.state.dishCalories = calories * quantity;
        return (
          <li>
            {quantity} {name} = {this.state.dishCalories} cal |
            <button className="button is-info">Delete</button>
          </li>
        );
    }
}
  
  export default Tab;