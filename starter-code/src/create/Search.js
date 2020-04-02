import React, {useContext, useState} from 'react';
import { Field, Control, Input } from 'react-bulma-components/lib/components/form';
import {FoodContext} from './FoodContext';

const Search = () => {
  const {searchFood} = useContext(FoodContext);
  const [nameSearch, setNameSearch] = useState('');

  const handleSearch = (name) => {
    setNameSearch(name);
    searchFood(name);
  }

  return(
    <Field>
      <Control>
        <Input type='text' placeholder="Search food" value={nameSearch} onChange={(e)=>handleSearch(e.target.value)}/>
      </Control>
    </Field>
  );
}

export default Search; 