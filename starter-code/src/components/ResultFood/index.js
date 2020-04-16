import React, { Component } from 'react';
import "./style.css";

class ResultFood extends Component {
   
    render(){
       // const {  } = this.props;
        return (
            <div className="listFood">
                <h4> Today's Foods </h4>

                <h4> Total: 0 cal </h4>
            </div>
        )
    }
}

export default ResultFood;