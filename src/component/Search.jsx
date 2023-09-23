import { Divider, Input } from 'antd';

function Search(props) {
  return (
    <>
      <Divider>Search</Divider>
      <div className="search-container">
        <label>Search</label>
        <Input
          value={props.search}
          type="text"
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default Search;
