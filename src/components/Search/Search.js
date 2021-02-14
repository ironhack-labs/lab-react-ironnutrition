import '../../App.css';
import 'bulma/css/bulma.css';
import React from 'react';

export function Search(props) {

  const [search, setSearch] = React.useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
    props.filterFood(search)
  };
  return (
    <input
      type="text"
      name="search"
      value={search}
      placeholder={'search food'}
      onChange={(e) => handleChange(e)}
    />
  );
}
