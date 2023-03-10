const FoodsItem =({id, name, calories, image, servings, onDelete}) => {
    return (
        <div className="row">
            <div className="col-sm-6 card w-20 border-light" >
                <div className="" >
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{name}</h5>
                        </div>

                    </div>
                    <hr></hr>
                                
                    
                    <div className="Card">
                        <img src= {image} className="card-img-top" alt=""/>
                    </div>
                    <div className="card-body mt-4">
                        
                        <h5 className="card-calories p-2">Calories: {calories}</h5>
                        <h5 className="card-number p-2" type="number">Servings: {servings}</h5>
                        <h4 className="card-total-calories p-2">Total Calories: {calories} kcal</h4>
                        {onDelete ? 
                        <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
                        : null}

                    </div>
                    
                </div>
                

            </div>

        </div>
        
    )
}


export default FoodsItem;