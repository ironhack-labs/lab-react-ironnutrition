import React from 'react';

const Foodbox = ({name,calories,image,quantity, addItem}) => {

    const quantityChange = (event) => {
        console.log("hola",event.target.value)
    }

    return (
        <div className="card  mb-3 foodbox h-100" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-3 foodbox">
                    <img src={image} className="img-fluid rounded-start " alt="/" />
                </div>

                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{calories} cal</p>
                    </div>
                </div>

                <div className="col-md-2  foodbox">
                    <input 
                        type="number"
                        value="1"
                        name="quantity"
                        min={1}
                        className="form-control" 
                        onChange={quantityChange}
                    />
                </div>

                <div className="col-md-2 foodbox">
                    <button className='btn btn-primary foodBoxBtn'
                            onClick={addItem} 
                    > + </button>
                </div>
            </div>
        </div>
    );
}

export default Foodbox;
