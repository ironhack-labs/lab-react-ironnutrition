
const AddNewFood  = ({onAdd, showAdd}) =>{
   
    return(
        <button onClick={onAdd} style={showAdd ? 'red' : 'green'}>{showAdd ? 'Close' : 'Add'}</button>
    
    )
}

  
export default AddNewFood;