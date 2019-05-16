import React,{Component} from 'react';

class FoodBox extends Component {

    state ={food:{quantity:0}}
    
    handleChange = e => {
        let {food} = this.state;
        let field = e.target.name;
        food[field] = e.target.value;
        food.calories = this.props.props.calories * food.quantity;
        console.log(food)
        this.setState({food});
      };

    addComida =e=>{
        let {food} = this.state;
        let calories = food.calories;
        this.setState({food, calories})
        console.log(calories);
    }
      
      render(){
        let {props} = this.props;
        let {name,calories,image} = props;
        
          return(
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img name='image' src={image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{name}</strong> <br />
                    <small>{`${calories} cal.`}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      name="quantity"
                      type="number" 
                      defaultValue='0'
                      onChange = {this.handleChange}
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick ={this.addComida}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          )
      }      
}
    
    export default FoodBox;

    ////

