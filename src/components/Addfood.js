
import {Component} from "react";
export default class AddFood extends Component {

    state = {
        name:"",
        image: "",
        calories: 0,
    };

};


onChange = (event) =>{
    this.setState({[event.target.name]: event.target.value})
}
onSubmitClick = () =>{

    this.props.onSubmit
}

