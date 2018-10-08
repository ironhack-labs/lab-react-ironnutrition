import React, {Component} from 'react';


class FoodForm extends Component {
    constructor(){
      super();
      this.state = {
        name: "",
        calories: 0,
        quantity: 0,
        image: "",
        error: ""
      }
    }


    handleSubmit(){
        let{name, calories, image, quantity, error}=this.state;
        if(name ==="") return this.setState({error:"empty name"});
        if(calories ==="") return this.setState({error:"empty calories"});
        if(image === 0) return this.setState({error:'Empty Image'});
        this.setState({error:"", name: "", quantity:0, calories:0});
        this.props.allFood({name, calories, image})
    }

    render(){
        let{name, calories, image, quantity, error} = this.state;
        return (
            <div>
                <p style={{color:"red"}}>{error}</p>
                <label>Plate</label>
                <input type="text" value={name} onChange={(e) => this.setState({name:e.target.value})} />
                <label>Calories</label>
                <input type="number" value={calories} onChange={(e) => this.setState({calories:e.target.value})}/>
                <label>Image</label>
                <input type="text" value={image} onChange={(e) => this.setState({image:e.target.value})}/>
                <button onClick={this.handleSubmit.bind(this)}>Add dish</button>
            </div>
        )
    }


}
export default FoodForm;