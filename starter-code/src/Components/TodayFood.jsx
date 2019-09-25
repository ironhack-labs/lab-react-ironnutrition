import React from 'react';

class TodayFood extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="todayFoodList">
                <h1>Today's foods</h1>
                <ul>
                    {this.props.todayList}
                </ul>
                Total: {this.props.total}
            </div>
        )
    }
}

export default TodayFood;