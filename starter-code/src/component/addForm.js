import React from 'react'

class AddForm extends React.Component {
    state = {
        name: '',
        calories: '',
        image: ''
    }

    handleSubmit(e) {
        let {name, value} = e.target;
        e.preventDefault()
        console.log(e)
        this.setState({[name] : value})
      }
    render() {
        const {image, name, calories} = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
                 <div className="field">
                    
                <label className="label">Image</label>
                    <div className="control">
                     <input className="input" type="file" placeholder="Load image" name="image" value={image} onChange={event => this.handleSubmit(event)}/>
                  </div>
               </div>
        <div className="field">
                    
      <label className="label">Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="Tag Name" name="name" value={name} onChange={event => this.handleSubmit(event)}/>
      </div>
    </div>
    
    <div className="field">
      <label className="label">Calories</label>
      <div className="control">
        <input className="input" type="number" name="calories" value={calories} onChange={event => this.handleSubmit(event)}/>
      </div>
    </div>
    <button >Add Food</button>
            </form>
        )

    }
}

export default AddForm