import './AddNewFood.css'
const AddNewFood  = ({onAdd, showAdd}) =>{
   
    return(
        <div className="add-new-food">
        <button onClick={onAdd}>{showAdd ? 'Close' : 'Add Food'}</button>
        </div>
    )
}

  
export default AddNewFood;