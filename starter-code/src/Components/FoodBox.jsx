import React from 'react';


class FoodBox extends React.Component{
constructor(props){
    super(props);
    this.state ={
      inValue: 1
    }
}

calculator = (theValue) => {
  this.setState({
    inValue: theValue
  })
}

updateInput = (e) =>{

  this.setState({
    inValue: e.currentTarget.value
  })

}

    render(){
        return(
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={this.props.image} alt="theFood" width="150px"/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{this.props.name}</strong> <br />
                      <small>{this.props.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        type="number" 
                        value={this.state.inValue}
                        onChange={this.updateInput}
                      />
                    </div>
                    <div className="control">
                      <button className="button is-info" onClick={ () => {this.props.sendToday(this)}}>
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