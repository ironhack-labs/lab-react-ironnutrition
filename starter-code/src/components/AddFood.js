import React, {Component} from 'react'

class AddFood extends Component{

  constructor(){
    super()

    this.state = {
      name: '',
      calories:'',
      image: '',
      error: ''
    }

  }


  verifySubmit(){
    let {name,calories,image} = this.state
    if (name === '' || calories === '' || image === '' ) {
      this.setState({error:'Field is empty'})
    }
    else{
      this.setState({name:'',calories:'',image:'',error:''})
      this.props.newFood({name,calories,image})
    }
  }

  render(){

    return(

      <div>
        <h3>{this.state.error}</h3>
        <label>Food name
          <input 
            className='input is-primary' 
            type='text' 
            onChange={(e)=>this.setState({name:e.target.value})}>
          </input>
        </label>
        <label>Calories
          <input 
            className='input is-primary' 
            type='number' 
            onChange={(e)=>this.setState({calories:e.target.value})}>
          </input>
        </label>
        <label>Image
          <input 
            className='input is-primary' 
            type='text' 
            onChange={(e)=>this.setState({image:e.target.value})}>
          </input>
        </label>
        <button onClick={this.verifySubmit.bind(this)} className='button is-info'>Add food</button>
      </div>

    );
  }

}

export default AddFood
