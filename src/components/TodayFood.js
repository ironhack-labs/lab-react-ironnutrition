import React from "react";

class TodayFood extends React.Component {
    render() {
        return (
          <div>
            <p>
              {this.props.quantity} {this.props.name} ={' '}
              {this.props.quantity *this.props.calories} cal
            </p>
          </div>
        );
    }
}

export default TodayFood