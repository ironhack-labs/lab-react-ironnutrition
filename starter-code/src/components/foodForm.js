import React, {Component} from 'react';
import 'bulma/css/bulma.css';

export class FoodForm extends Component {

  constructor(){
    super();
    this.state = {
        food: {
          name: "",
          calories: 0,
          image: "",
          qantity: 0,
      }
    }
  }
    
    handleSubmit(){
        let { name, calories, image, error} = this.state;
        if(name === '') return this.setState({error:'Empty title'});
        if(image === '') return this.setState({error:'Empty image'});
        if(calories === '') return this.setState({error:'Empty calories'});
    
        console.log("FORM OK");
        this.setState({error: '', name:'', calories:'', image:''});
        this.props.foodReady({name, calories, image});
    }

    render(){
        let { name, calories, image, error} = this.state;
        return (
            <div>
           <p style={{color:"red"}}>{error}</p>
           <label>Nombre comida</label>
           <input type="text" value={name} onChange={(e) => this.setState({name:e.target.value})} />

           <label>Calorías</label>
           <input type="text" value={calories} onChange={(e) => this.setState({calories:e.target.value})}/>

           <label>Imagen</label>
           <input type="text" value={image} onChange={(e) => this.setState({image:e.target.value})}/>

           <button onClick={this.handleSubmit.bind(this)}>Añadir comida</button>

       </div>
        )
    }

}
