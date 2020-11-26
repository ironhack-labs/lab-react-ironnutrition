import React, {useState} from 'react'
import foods from '../foods.json';
import  { Formik, Field, Form } from 'formik'

function FoodBox ({name, calories, image, quantity, }) { 

    const [today, setToday]=useState(foods)
    function addToday(value){
       let foodToday= [...today]
    //    foodToday.filter(f=> f.id === value.id)
       console.log(value)
      }

    return (
    <Formik initialValues={{
        today:'',
    }}

    onSubmit={(values) => { 
    addToday({ ...values })

    }}
> 
        <div>
        <div style={{width:'100vh'}}>
            <div className="box" >
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                        <img src={image}/>
                        </figure>
                    </div>
            <div className="media-content">
        <div className="content">
        <p>
            <strong>{name}</strong> <br />
            <small>{calories}</small>
        </p>
        </div>
            </div>
    <div class="media-right">
        <div class="field has-addons">
            <Form>
                <div class="control">
                    <Field type="number" id="today" name="today" class="input"  placeholder="Add item" />
                        </div>
                    <div class="control">
                    <button type='submit' class="button is-info">+</button>
                    </div>
            </Form>
    </div>
    </div>
                </article>
            </div>
        </div>
        </div>
        </Formik>
    )
}
export default FoodBox


