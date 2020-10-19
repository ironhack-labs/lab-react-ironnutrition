import React from 'react';

function Search(props) {
  return (
    <div className="input-group input-group-lg mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="fa fa-search" aria-hidden="true" />
        </span>
      </div>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search for a food!"
        // Toda vez que o usuário tirar o dedo de uma tecla do teclado, execute a funçāo handleSearch
        onKeyUp={(event) => props.handleSearch(event.currentTarget.value)}
      />
    </div>
  );
}

export default Search;
