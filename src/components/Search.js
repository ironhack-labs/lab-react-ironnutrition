import {Input } from 'antd';

// Iteration 5
function Search(props) {
  return (
    <>
      <Input type="search" onChange={props.callbacSearchFood} />
    </>
  );
}

export default Search;