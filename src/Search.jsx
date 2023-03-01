import { useState } from 'react';
import { Divider, Input } from 'antd';

function Search(props) {
  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

    props.searchForFood(lowerCase);
  };

  return (
    <>
      <Divider>Search</Divider>
      <Input value={inputText} type="text" onChange={inputHandler} />
    </>
  );
}

export default Search;
