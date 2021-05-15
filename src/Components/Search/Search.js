import React from 'react';

import './Search.css';

export default function Search({ changeListener, value }) {
  return <input type="text" value={value} onChange={changeListener}></input>;
}
