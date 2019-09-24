import React from 'react';

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            newName: "",
            newCalories: "",
            visibility: "hidden"
        }
    }

        showForm = () => {
      this.setState({
          visibility: "visible"
      })
        }


    render(){
        return(
            <div>
                
                <button onClick={this.showForm}>Add new Food</button>
           
                <div className="theForm" style={{ visibility: this.state.visibility }}>
                     
                     <form onSubmit = {this.addTheFood}>
                        <h5>New Animal</h5>
    
                        <legend> Name </legend>
                        <input value={this.state.newName} onChange={this.updateTheValue} name="newName" type="text" />
    
                        <legend> Calories </legend>
                        <input value={this.state.newCalories} onChange={this.updateTheValue} name="newWeight" type="number" />
    
                        <button>Save</button>
    
                    </form>
    
    
                </div>
    


            </div>
        )
    }
}

export default Form;

