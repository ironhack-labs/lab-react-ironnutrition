
import React, {Component} from 'react';


class Foodbox extends Component{
  

  handleSave = (item) =>{

    this.setState({item : item});
    this.props.save(item)
    
  }

  
  render(){

    var foodArray = this.props.food
   return(
   <ul >
     {foodArray.map((item, index) => {
 
       return (
         <div className="box" key={index}>
         <article className="media">
           <div className="media-left">
             <figure className="image is-64x64">
               <img src={item.image} alt="item image"/>
             </figure>
           </div>
           <div className="media-content">
             <div className="content">
               <p >
                 <strong>{item.name}</strong> <br />
                 <small>{item.calories}</small>
               </p>
             </div>
           </div>
           <div className="media-right">
             <div className="field has-addons">
               <div className="control">
                 <input
                   className="input"
                   type="number" 
                   value="1"
                 />
               </div>
               <div className="control">
                 <button className="button is-info" onClick = {() => {this.handleSave(item)}}>
                   +
                 </button>
               </div>
             </div>
           </div>
         </article>
       </div>
       );
     })}
   </ul>
   
   
  );
 }
}

export default Foodbox;