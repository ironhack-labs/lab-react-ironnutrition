// Your code here

import React, { useState } from 'react'



function AddFoodForm(props) {

    // ESTADOS

    const [nombreComida, setNombreComida] = useState("");
    const [imagenComida, setImagenComida] = useState("");
    const [caloriasComida, setCaloriasComida] = useState(0);
    const [servingsComida, setServingsComida] = useState(0)



    // FUNCIONES CONTROL DE ESTADOS

    const introducirNombreComida = (evento) => {
        setNombreComida(evento.target.value)
    }
    const introducirImagenComida = (evento) => {
        setImagenComida(evento.target.value)
    }
    const introducirCaloriasComida = (evento) => {
        setCaloriasComida(evento.target.value)
    }
    const introducirServingsComida = (evento) => {
        setServingsComida(evento.target.value)
    }
/*
    const rellenarValores = ((event) => {
        let name = event.target.name;
        let clone = {...nuevaComida}
        clone[name] = event.target.value
        console.log(clone)
        setNuevaComida(clone)
    })


    */
    const pulsarCrearComida = (event) => {
        event.preventDefault();
        console.log("Entregando el formulario...")

        // Creamos la nueva comida
        const nuevaComida = {
            name: nombreComida,
            img: imagenComida,
            calories: caloriasComida,
            servings: servingsComida
        }

        console.log("Esto es la URL de comida");
        console.log(nuevaComida.img);


        // Actualizamos la data con la nueva comida
        const clone = [...props.allFood];
        clone.unshift(nuevaComida)
        console.log(clone);
        props.setAllFood(clone);

/*
        const clone = [...props.allFood]
        clone.unshift(nuevaComida)
        props.setAllFood(clone)*/

        // Reiniciamos los campos del formulario
        setNombreComida("");
        setImagenComida("");
        setCaloriasComida(0);
        setServingsComida(0);
        
    }



  return (
    <div>
        <form onSubmit={pulsarCrearComida}  style={{display: "flex", justifyContent: "center"}}>
            <div className='add-food'>
                <h2>Añadir Comida</h2>
                <label>Name: </label>
                <input type="text" onChange={introducirNombreComida} value={nombreComida} />
                <label>Image: </label>
                <input type="text" onChange={introducirImagenComida} value={imagenComida}/>
                <label>Calories: </label>
                <input type="number" onChange={introducirCaloriasComida} value={caloriasComida}/>
                <label>Servings: </label>
                <input type="number" onChange={introducirServingsComida} value={servingsComida}/>

                <button className="btnCSS" type="submit">Create</button>
            </div>
        </form>



    </div>
  )
}

export default AddFoodForm
