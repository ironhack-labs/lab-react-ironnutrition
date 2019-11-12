import React from 'react';

export default function ( { handleChange, search } = this.props ) {

  return (
    <div className="field">
      <div className="control">
        <input className="input" type="text" name="search" value={search} onChange={ handleChange } />
      </div>
    </div>
  )
}