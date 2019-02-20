    import React, { Component } from 'react'

    export default class Formadd extends Component {

        constructor(props){
            super(props);
    
            this.state = { 
            name: '',
            calories: "",
            image:"",
            
            }
        }

        changeName = (e) =>{
            let Cloned ={
                ...this.state,
                name: e.target.value,
            
            }
        this.setState(Cloned)
        }  
        changecalories = (e) =>{
            let Cloned ={
                ...this.state,
                calories: +e.target.value,
            
            }
        this.setState(Cloned)
        }  

        changeImg = (e) =>{
            let Cloned ={
                ...this.state,
                image: e.target.value,
            
            }
        this.setState(Cloned)
        } 
        
        

  handleFormSubmit = (e) => { 
    e.preventDefault()  
    this.props.addFoodHa(this.state)
    this.setState ={
      name:'',
      calories:'',
      image:''
    }
  }
        

    render() {
        return (
        <div>
        <form onSubmit={this.handleFormSubmit}>
            <input type="text" value={this.state.name} onChange={this.changeName}/>
            <input type="text" value={this.state.calories} onChange={this.changecalories}/>
            <input type="text" value={this.state.image} onChange={this.changeImg}/>
            <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
    }
