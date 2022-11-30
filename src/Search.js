import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    
    const handleInputChange = event => {
		props.setQuery(event.target.value)
	}

    return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.query} type="text" onChange={handleInputChange} />
    </>
  );
}

export default Search;
