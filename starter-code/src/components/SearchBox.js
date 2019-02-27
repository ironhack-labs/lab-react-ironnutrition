import React from 'react';

export default ({ onSearch }) => (
  <div className="field">
    <div className="control">
      <input className="input" type="text" placeholder="Search"
        onChange={(e) => onSearch(e.target.value)} />
    </div>
  </div>
);