import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const handleInputChange = event => {
        props.setQueryProp(event.target.value)
    }
  return (
    <>
      <Divider>Search</Divider>
      <Input placeholder="Pizza, Salad, Potatoe..." type="text" onChange={handleInputChange} />
    </>
  );
}

export default Search;