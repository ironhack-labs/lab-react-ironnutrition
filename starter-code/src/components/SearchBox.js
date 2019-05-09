import React from 'react'

export default function SearchBox({ searchChange }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Buscale aquí prro :v"
        onChange={searchChange}
      />
    </div>
  )
}
