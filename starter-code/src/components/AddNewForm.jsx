import React, {Component} from 'react'

class AddNewForm extends Component{
    state={
        image: "",
        name: "",
        calories: ""
    }

    onChange = e =>{
        switch (e.target.name) {
            case 'name':
              this.setState({ name: e.target.value })
              break
            case 'image':
              this.setState({ image: e.target.value })
              break
            case 'calories':
              this.setState({ calories: e.target.value })
              break
            default:
              break
          } 
    }

    sendData = () =>{
        let {addFood} = this.props
        let {image,name, calories} = this.state
        calories = parseInt(calories,0)
        addFood(image,name,calories)
    }



    render(){
        let {image, name, calories} = this.state

        return(
            <form>
                <div className="control">
                    <input onChange={this.onChange} className="input" type="text" placeholder="Image URL" value={image} name="image"/>     
                </div>
                <div className="control">
                    <input onChange={this.onChange} className="input" type="text" placeholder="Name" value={name} name="name"/>     
                </div>
                <div className="control">
                    <input onChange={this.onChange} className="input" type="text" placeholder="Calories" value={calories} name="calories"/>     
                </div>
                <button onClick={this.sendData} className="button is-link">
                    Add              
                </button>
            </form>


        )
    }





}



export default AddNewForm