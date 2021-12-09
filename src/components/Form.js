import React, { useState } from 'react';

  //------------PRUEBA------------
  
  function Form() {
    //---------------------2.HOOKS-----------------------//
    const [showForm, setShowForm] = useState(false);
    const [dataFood, setDataFood] = useState({
      name: "",
      calories: "",
      image: ""
    })
    const [listDataFood, setListDataFood] = useState([])
  
    //-----------------3 FUNCIONES DEL COMPONENTE-------------------//
    const openForm = () => {
        console.log("yes")
        setShowForm(true);
    }
    //3.1 Captura de Datos
    const capturaDatos = (e) =>{
      console.log(e) // {..target: input value: "Rodrigo"}
      console.log(e.target.value) // Rodrigo - value es el valor del campo del Texto

      return setDataFood({
        ...dataFood,
        [e.target.name]: e.target.value,
      })
    }

    //3.2 CRUD - Crear y leer
    const retornarDataFood = (e) =>{
      e.preventDefault()
      
      //Empuja los datos puestos en el imput al arreglo
      setListDataFood([
        ...listDataFood,
        dataFood
      ])
      console.log(listDataFood)
      //Deja vacio los imputs para poder llenar de nuevo
      setDataFood({
        name: "",
        calories: "",
        image: ""
      })

    }
  
    return (
      <div>
        <div className="mt-4 media-right">
          <div className="control">
            <button className="button is-info" onClick={openForm}>
            CREA UN ALIMENTO
            </button>
          </div>
        </div>

          {
        showForm && (
            <form showForm={showForm} onSubmit={(event)=> { retornarDataFood(event) }}>
              <div className="mt-4 media-right">
                <input 
                name="name"
                placeholder="comida"
                value={dataFood.name}
                onChange={(event) => { capturaDatos(event) }}
                />
                <input 
                name="calories"
                placeholder="calorias"
                value={dataFood.calorias}
                onChange={(event) => { capturaDatos(event) }}
                />
                <input 
                name="image"
                placeholder="imagen url"
                value={dataFood.image}
                onChange={(event) => { capturaDatos(event) }}
                />
              <button className="button is-info" onClick={!showForm}> Añadir
              </button>
              </div>
            </form>
          )}
          {
          
          listDataFood.map((elem) =>{
            return(
              <>
              <div className="box">
        <article className="media">
        <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={elem.image} alt="algo"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{elem.name}</strong> <br />
                    <small>{elem.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
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
  export default Form;
