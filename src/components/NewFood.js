import React from 'react';

class NewFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            cal: "",
            file: null
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }
    handleFileUpload(event) {
        const {name, files} = event.target;
        const file = files[0];
        this.setState({[name]: file});
    }

    render() {
        return(
            <form onSubmit={(event) => this.props.handleSubmitNewFood(this.state, event)} className="hide">
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Name</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" name="name" value={this.state.name} type="text" placeholder="Name of the food" required onChange={e => this.handleChange(e)} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Calories</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" name="cal" type="number" min={1} placeholder="200 cal" required onChange={e => this.handleChange(e)} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="file">
                    <label className="file-label">
                        <input className="file-input" name="file" type="file" required onChange={e => this.handleFileUpload(e)} />
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">
                                Choose a file…
                            </span>
                        </span>
                        <span className="file-name">
                            {!this.state.file ? "Type: jpg, png" : this.state.file.name}
                        </span>
                    </label>
                </div>
                <button className="button">Submit</button>
            </form>
        )
    }
    
}

export default NewFood;