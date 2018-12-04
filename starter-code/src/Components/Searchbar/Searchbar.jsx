import React from 'react';
import './Searchbar.css';


export default class Searchbar extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
        }
    }

    changeNameSearchHandler(e, filt) {
        this.setState({ ...this.state, name: e.target.value })

        filt(e.target.value)
    }

    render() {
        return (
            <div className="Searchbar">
                <input type="text" name="name" placeholder="Search" onChange={(e) => this.changeNameSearchHandler(e, this.props.function)} />
            </div>
        );
    }
}