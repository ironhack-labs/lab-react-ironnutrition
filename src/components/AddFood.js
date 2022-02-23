function AddFood(props){
    return (
        <div>   
            <form onSubmit={props.submitFood}>
            
        <label className="label">Name</label>
       
          <input type="text" value={props.currentName} onChange={props.addName}></input>
        
      
      
      
        <label >Calories</label>
        
          <input  type="number" value={props.currentCalories} onChange={props.addCalories}></input>
        
      
        <label >Image</label>
        
          <input type="text" value={props.currentImage} onChange={props.addImage}></input>
        
      
      
        <button type="Submit" onSubmit={props.submitFood} className="button is-primary">Submit</button>
      
            </form>

        </div>
        
    )
}



export default AddFood