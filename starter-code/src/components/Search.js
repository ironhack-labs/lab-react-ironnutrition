import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            findFood: "",
            myCopy: []
        }

    }
  handleChange = e =>{
      //this.props.searchFood(e.target.value)
      console.log(e.target.value)
      let foodCopy = [...this.props.searchFood]
      

      this.setState({
        filterat: foodCopy
      })
      this.setState({
          findFood: e.target.value,
          myCopy: foodCopy.filter((arg)=>{
            return arg.name.includes(e.target.value)})
      })
      console.log(myCopy)

  }   

 render() {
   
    
    return(
        <form onSubmit={e=> e.preventDefault()}>
        <input className="search" type="search" value={this.state.findFood} onChange={e=> this.handleChange(e)}/>
        </form>
    )
}

}





export default Search

/**/