import React from "react";


export default class List extends React.Component {

     

      render(){
          return(

            <div className="search-bar">

                <input type="text" onChange={e => this.props.search(e)} className="input" placeholder="Search..." />
            </div>
          )
      }
}