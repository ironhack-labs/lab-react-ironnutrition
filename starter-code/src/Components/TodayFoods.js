import React from 'react';


class TodaysFoods extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return( 
            <div className="todays-special">
             <h3>Today's Specials</h3>
               <ul>
                 {this.props.todaySpecial}
                </ul>
            </div>
    )
  }  
}


export default TodaysFoods;