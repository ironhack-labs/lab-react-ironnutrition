import React from 'react';

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            visibility: "hidden"
        }
    }

        showForm = () => {
            if(this.state.visibility === "visible"){
                this.setState({
                    visibility: "hidden"
                })
            }else{

      this.setState({
          visibility: "visible"
      })
    }
        }


    render(){
        return(
            <div>
                
                <button onClick={this.showForm}>Add new Food</button>
           
                <div className="theForm" style={{ visibility: this.state.visibility }}>
                     
                     <form onSubmit={this.props.addFood}>
                        <h5>New Food</h5>
    
                        <legend> Name </legend>
                        <input value={this.props.newName} onChange={this.props.update} name="newName" type="text" />
    
                        <legend> Calories </legend>
                        <input value={this.props.newCalories} onChange={this.props.update} name="newCalories" type="number" />
    
                        <legend> Image </legend>
                        <input value={this.props.newImage} onChange={this.props.update} name="newImage" type="text" />

                        <button onClick={this.showForm}>Save</button>
    
                    </form>
    
    
                </div>
    


            </div>
        )
    }
}

export default Form;

