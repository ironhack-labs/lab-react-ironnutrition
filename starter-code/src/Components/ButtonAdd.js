import React, {Component} from 'react'

class AddFood extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            calories: '',
            image:'',
            quantity: 0,
        }

    }



    handleChange=e=>{
        let {name, value}=e.target
        this.setState({
            [name]:value
        })
    }

    handleFormSubmit=e=>{
        e.preventDefault()
        this.props.addNewFood(this.state)
        this.setState({name: '', calories:'', image:''})
    }


    render (){
        return(
            <form onSubmit={this.handleFormSubmit}>
               <label>Name:
               <input type='text' name='name' value={this.state.name} onChange={(e) => this.handleChange(e)} />
               </label>
               <br></br>

               <label>Calories:
               <input type='text' name='calories' value={this.state.calories} onChange={(e) => this.handleChange(e)} />
               </label>
               <br></br>

               <label>Image:
               <input type='file' name='image' value={this.state.image} onChange={(e) => this.handleChange(e)} />
               </label>
               <br></br>

               <input type='submit' value='Save' />
           </form>
        )
    }

}


export default AddFood