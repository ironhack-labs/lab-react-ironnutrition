import React, {Component} from "react"


class Menu extends Component {

  constructor(props) {

      super(props)

      this.state = {
          
      }
  }


  render() {
    
    return (
      <div>
      <h2>Today's food</h2>
      <ul>
        {
          this.props.menuList.map((el, idx)=> {
              return <li key={idx}> {el} </li>
          })
        }
      </ul>
       
      </div>
    )}}

    export default Menu