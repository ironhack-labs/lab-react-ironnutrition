import React from 'react'
import 'bulma/css/bulma.css'
import { useForm } from 'antd/lib/form/Form'

function NewFood({name,calories,image, onClick}) {

    const [form] = useForm()

    return (
    
             <form>
                <div className="field">
                    <label className="label" htmlFor="name">Name:</label>
                    <div className="control">
                        <input placeholder="Pizza" className="input my-input" type="text" name="name" id="name-input" value={name} />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="calories"># of calories:</label>
                    <div className="control">
                        <input placeholder="ex: 250" className="input my-input" type="number" name="calories" id="calories-input" value={calories} />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="image">Image URL</label>
                    <div className="control">
                        <input placeholder="Paste the URL" className="input my-input" type="text" name="image" id="image-input" value={image} />
                    </div>
                </div>
                <button onClick={onClick} className="button my-btn is-success" style={{ margin: "20px 0" }}>Add new food</button>
            </form>

            
     
    )
}

export default NewFood
