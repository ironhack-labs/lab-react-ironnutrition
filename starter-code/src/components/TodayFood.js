import React from "react";


class TodayFood extends React.Component{

constructor(props){
super(props);

this.state = {
    arrayTodayFood : [],
}

}
render(){
    console.log(this.props)
    const {clickedItems} = this.props;

    console.log("clickedItems:",clickedItems);
    return(
        <div>
            
            <ul> {clickedItems.map((el,index) => { 
              return  <li key={index} > <h1> {el} </h1> </li>
            } )}
                
            </ul>
        </div>

        )
    }


}






export default TodayFood;