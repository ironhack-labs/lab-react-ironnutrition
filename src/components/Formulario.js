import React, { useState } from 'react';

import Food from './Food';

const Formulario = () => {


    const [datos, setDatos] = useState({
       name:"",
       calories:"",
       image:"",
       quantity:""
    })

    const [datosGenerados, setDatosGenerados] = useState([])

    const capturaDatos = (evento)=>{
           return setDatos({
              ...datos,
              [evento.target.name] : evento.target.value  
           })
    }

    const generaDatos = (evento)=>{
        evento.preventDefault()
        setDatosGenerados([
      ...datosGenerados, datos
    ])
        setDatos({
            name:"",
            calories:"",
            image:"",
            quantity:""
        })
    }
    console.log(datosGenerados)
    return (

        <div className="container">
            <h1>Formulario</h1>

            <form onSubmit={(evento)=>{generaDatos(evento)}}>
                <label>Nombre:</label>
                <input
                 name='name'
                 value={datos.name} 
                 onChange={(evento)=>{capturaDatos(evento)}}
                 /><br/>
                <label>Número de calorías:</label>
                <input 
                name='calories'
                value={datos.calories} 
                onChange={(evento)=>{capturaDatos(evento)}}/><br/>
                <label>Imagen:</label>
                <input name='image'
                value={datos.image} 
                onChange={(evento)=>{capturaDatos(evento)}}
                /><br/><br/>
                <button>Nueva comida</button>
            </form>

            <h1>Datos generados</h1>
            {
                datosGenerados.map((info)=>{
                    return(
                        <>
                         
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <article className="row g-0">
                  <div className="col-md-4">
                    <img key={info.image} className="img-fluid rounded-start" src={info.image} />
                  </div>
                  <div className="col-md-8">
                    <p>
                      <strong>{info.name}</strong> <br />
                      <small>{info.calories}</small>
                    </p>

                    <input className="input" type="number" value="1" />

                    <button className="btn btn-info">+</button>
                  </div>
                </article>
              </div>
            
                        </>
                    )
                })
            }
        </div>
    )
}

export default Formulario
