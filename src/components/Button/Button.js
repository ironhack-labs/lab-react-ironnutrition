import React, {Component} from "react";
import FormDown from '../FormDown/FormDown';
import './Button.css'


class Button extends Component {
  constructor(props){
    super(props);
      this.state = {
        formActive: false
    }
  }

  render(){
    const {formActive} = this.state
    return (
      <div>
      <button 
        onClick={()=> this.setState({formActive: !formActive})}
        className="drop-button">
        Add new food!
        </button>
        <div>
      </div>
      <div>
        {(formActive) ? 
            <div>
              <FormDown  
              onFocus={() => this.setState({formActive:false})}
              />
            </div> 
            : 
            null}
      </div>
      </div>
    )
  }
}

export default Button;
