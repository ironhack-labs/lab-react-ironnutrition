import React from 'react';

const Food = ({datos}) => {
    console.log(datos)
    return (
        <>
        <div style={{display:'flex', flexDirection:'column'}}>

        
    { 

        datos.map((food)=>{
          return (
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <article className="row g-0">
                <div className="col-md-4">
                  <img className="img-fluid rounded-start" src={food.image} />
                </div>
                <div className="col-md-8">
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories}</small>
                  </p>

                  <input className="input" type="number" value="1" />

                  <button className="btn btn-info">+</button>
                </div>
              </article>
            </div>
          );
    }) 
        }
    </div>
    </>)
}


export default Food