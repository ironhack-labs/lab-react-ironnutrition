import React  from 'react';

const Form = (action) => (
    <div id="AddForm" className="field is-horizontal" >
        <form onSubmit={action} >
            <div className="field">
                <label className="label" htmlFor="">Name</label>
                <div className="control">
                    <input className="input" type="string" name=""  />
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="">Number of Calories</label>
                <div className="control">
                    <input className="input" type="number" name=""  />
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="">Image</label>
                <div className="control">
                    <input className="input" type="string" name=""  />
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    </div>
);

export default Form;