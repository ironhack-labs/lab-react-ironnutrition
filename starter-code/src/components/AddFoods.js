import React, {Component} from "react"
import foods from "../foods.json"

class AddFoods extends Component{
    constructor(props){
        super(props)
      this.state = {
          name: "",
          calories:"",
          images: "",
          visible: false

      }




    }


    showForm = e =>{
        console.log(this.state)
      this.setState({
          visible: !this.state.visible
      })
    }
    handleChange = e =>{
        const {name,value} = e.target
       
        this.setState({
            [name]:value,
       
        })
    }
  

    handleFormSubmit = e =>{
        e.preventDefault()
        this.props.addNewFoods(this.state)
        this.setState({
            name: "",
            calories:"",
            images: "",
            visible: false
  
        })
    }

render(){
    return(
<section>

<button onClick={this.showForm}>Add new food</button>



{this.state.visible ? <form onSubmit={e=>this.handleFormSubmit(e)} className="add-form">
<label>Name:</label>
<input type="text" name="name"value={this.state.name} onChange={e=> this.handleChange(e)}/>
<label>Calories</label>
<input type="text" name="calories"value={this.state.calories} onChange={e=> this.handleChange(e)}/>
<label>Imagen</label>
<input type="text" name="images"value={this.state.images} onChange={e=> this.handleChange(e)}/>
<input type="submit" value="Submit" />

</form> : true}

</section>





    )
}


}








export  default AddFoods