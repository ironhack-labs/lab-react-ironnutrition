import { Divider, Input } from 'antd';

function Search(props) {
    const handleInputChange = (event) => {
        //return the value of what we type in the search
        props.setQueryProp(event.target.value);
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={handleInputChange} />

    </>
  );
}

export default Search;
