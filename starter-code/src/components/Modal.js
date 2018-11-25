import React,{Component} from 'react';
import FormField from "./FormField";

class Modal extends Component {

   /* onSubmit = (event) => {
        const target = event.target;
        this.props.handleAdd(target.name,target.calories,target.image);
    };*/
render(){
    return(
        <div className="modal" >
            <div className="modal-background" onClick={this.props.closeModal}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add food</p>
                    <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
                </header>
                <form onSubmit={this.props.onSubmit}>
                    <section className="modal-card-body">
                        <FormField label="Name" name="name"/>
                        <FormField label= "Calories" name="calories"/>
                        <FormField label="Image URL" name="image"/>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" type="submit">Add food</button>
                        <button  className="button" onClick={this.props.closeModal}>Cancel</button>
                    </footer>
                </form>
            </div>
        </div>
    );
}

}


export default Modal