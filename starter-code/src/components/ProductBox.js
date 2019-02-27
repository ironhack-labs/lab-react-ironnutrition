import React,{Component} from 'react';

class ProductBox extends Component{

  constructor (props){
    super(props);

    this.state = {
      quantity : 1
    }
  }

  onChangeQuantity  = (event) => {
    if(event.target.value >= 0){
      this.setState({
        quantity : event.target.value
      })
    }

    console.log(event.target.name)
  }
  

  onChangeMenu = () => {
    this.props.onChangeMenu({
      name: this.props.name,
      calories: this.props.calories,
      quantity: this.state.quantity
    })
  }

  render(){
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image}></img>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br></br>
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input type="number" className="input" name='inputQuantity' value={this.state.quantity} onChange={this.onChangeQuantity}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.onChangeMenu}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
);
}

}

export default ProductBox