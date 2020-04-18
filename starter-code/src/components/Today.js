import React ,  { Component } from "react"




class Today extends Component{


render(){

    return(
     <ul>
       <li>{this.props.name} + {this.props.cal} + {this.props.q} </li>  
     </ul>
    )
}

}

export default Today