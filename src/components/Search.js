import { Divider, Input } from 'antd';

function Search(props) {
  const handleSearch = (event) => {
    const searchPhrase = event.target.value.toLowerCase();
    props.onSearch(searchPhrase);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.searchPhrase} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;