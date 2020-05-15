import React from 'react';
import 'bulma/css/bulma.css';

class Search extends React.Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div className="field">
                <div className="control">
                    <input className="input" type="text" onChange={e => this.onChange(e)} />
                </div>
            </div>
        );
    }

    onChange(event) {
        this.setState({
            text: event.target.value
        }, () => {
            this.props.searchMethod(this.state.text)
        });

    }

}

export default Search;