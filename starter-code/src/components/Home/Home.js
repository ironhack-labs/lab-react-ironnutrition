import React, {Component} from 'react';
import foods from '../../foods.json';
import FoodBox from "./FoodBox";
import Form from "./Form";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            foods : foods,
            show: false
        }
    }

    addFood = (e) => {
        e.preventDefault();
        let {show} = this.state;
        show = !show;
        this.setState({show});
    }

    render(){
        return(
            <div>
                <div className="columns" >
                    <div className="column"></div>
                    <div className="column"><h1 className="title">IronNutrition</h1></div>
                    <div className="column"><a className="button" onClick={this.addFood} >Add new food</a></div>
                    <div className="column"></div>
                </div>
                {this.state.show ? <Form action={this.addFood} /> : ""}
                <div>
                    <input type="text" className="input" style={{margin: "30px 0px"}} name="search" placeholder="Search" value=""/>
                </div>
                {this.state.foods.map((ele, index) => {
                    return <FoodBox key={index} food={ele}/>
                })
                }
            </div>
        );
    }
}

export default Home;
