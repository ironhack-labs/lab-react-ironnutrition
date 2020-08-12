import React, {Component} from 'react'

class Search extends Component {
    constructor (){
        super ()
        this.state = {
            name: ''
        }
    }

   handleInput = e =>{
       const name = e.target.name
       const value = e.target.value
       this.setState({name},()=>{
           this.props.searchFood(value)
       })
   }


   handleFormSubmit =e =>{
       e.preventDefault()
       this.props.searchFood(this.state.name)
    //      this.setState({
    //          name: '',
    // })
}
    render(){
        return(
            // <form onSubmit={this.handleFormSubmit}>
            //     <div className="field">
               
                    <input className="search-bar" name='name' type="text" placeholder="serch"  onChange={this.handleInput}/>
            //     </div>
            // // </form>
        )
    
    }




}

export default Search