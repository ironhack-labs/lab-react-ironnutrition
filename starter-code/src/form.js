import React, {Component} from 'react';

export class Form extends Component {
    constructor(){
        super()
        this.state = {
            show: false,
            name: "",
            calories: "",
            image: "",
            message:""
        }
    }

    addFood = () => {
      this.setState({show: !this.state.show});
  }

    // handleSubmit(){
    //     let { title, director, error} = this.state;
    //     if(title === '') return this.setState({error:'Empty title'});
    //     if(director === '') return this.setState({error:'Empty director'});

    //     if(title === "crepusculo") return this.setState({error:'Esta ni se te ocurra'});

    //     console.log("FORM OK");
    //     this.setState({error: '', title:'', director:''});
    //     this.props.movieReady({title, director});
    // <form formSubmit={food => this.addFood(food)}/>
    // }
  submit(){
    let { name, calories,image, message} = this.state;
    if(name === '') return this.setState({message:'You have to set a name'});
    if(calories === '') return this.setState({message:'You have to set a calories number'});
    if(image === "")return this.setState({message:'You have to load an valid image url'});
    this.setState({message: "",name:"",calories:"",director:""});
    this.props.formSubmit({name,calories,image});
   
  }
    render(){
        return (
            <div>
              <button className="food" onClick={this.addFood} >Add Food</button>
              {this.state.show &&
                    <div className="form">
                        <h2>{this.state.message}</h2>
                <label>Foods Name:</label>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} />
                <label>Calories</label> 
                <input type="number" value={this.state.calories} onChange={(e) => this.setState({calories:e.target.value})}/>
                <label>Url of the Image</label>
                <input type="text" value={this.state.image} onChange={(e) => this.setState({image:e.target.value})}/>
                <button onClick={this.submit.bind(this)}>Add</button> 
                        
                    </div>
                }
           
            </div>
        )
    }
}