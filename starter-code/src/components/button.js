import React from 'react'

export default function button(props) {
    return (
        <div>
            {!props.formIsShowed && (
            <button className="button is-primary" onClick={props.displayForm}>
              Add New Food
            </button>
          )}
        </div>
    )
}

