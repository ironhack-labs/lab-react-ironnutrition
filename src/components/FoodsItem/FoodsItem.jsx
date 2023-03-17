import './FoodsItems.css'

const FoodsItem =({id, name, calories, image, servings, onDelete}) => {
    return (
        <div className="card h-100 ">
           
            
                <h5 className='card-name'>{name}</h5>

                <div className="col-6">
                    <img src= {image} className="card-img-top" alt=""/>
                </div>

                <div className="card-body">
                    
                    <h5 className="card-calories p-2">Calories: {calories}</h5>
                    <h5 className="card-number p-2" type="number">Servings: {servings}</h5>
                    <h4 className="card-total-calories p-2">Total Calories: {calories} kcal</h4>
                    {onDelete ? 
                    <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
                    : null}

                </div>

                        
                  

                
           
   
            

           

        </div>
        
    )
}


export default FoodsItem;