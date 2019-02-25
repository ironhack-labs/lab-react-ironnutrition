import React from 'react';

const FormFood = ({submitform,handleform,form}) => {
  return(
    <div>
      <div className="columns">
        <div className="column is-two-thirds">
          <form onSubmit={submitform}>

            <div className="field ">
              <label className="label">Name</label>
              <div className="control">
                <input
                  name="name"
                  value={form.name}
                  className="input"
                  onChange={handleform}
                  type="text"
                  placeholder="Hamburguer"
                />
              </div>
              <label className="label">Calories</label>
              <div className="control">
                <input
                  value={form.calories}
                  className="input"
                  name="calories"
                  type="text"
                  placeholder="Text input"
                  onChange={handleform}
                />
              </div>
              <label className="label">UrlImage</label>
              <div className="control">
                <input

                  value={form.image}
                  className="input"
                  type="text"
                  placeholder="https://www.tokyoshop.es/b2c/producto/MERCH4364/1/poster-tokyo-ghoul-kaneki-gigante-"
                  name="image"
                  onChange={handleform}
                />
              </div>
              <div className="control">
                <button
                  className="button is-link"
                 onClick={submitform}
                >Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div className="column">

        </div>
      </div>


    </div>
  );
}

export default FormFood;