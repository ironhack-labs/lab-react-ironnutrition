import React from 'react'

class SubmitForm extends React.Component {


    render() {
        return (
            <div>
                {this.props.disabled === 'true' ?
                    <input className="button is-link is-fullwidth" type="submit" value="Submit" disabled />
                    :
                    <input className="button is-link is-fullwidth" type="submit" value="Submit" />
                }
            </div>
        );
    }
}

export default SubmitForm