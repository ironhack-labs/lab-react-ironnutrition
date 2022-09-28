import { Divider, Input } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const Search = (props) => {
  return (
    <div className="search-container">
      <Divider>Search</Divider>
      <Input
        type="text"
        onChange={(e) => {
          props.searchFood(e.target.value);
        }}
      ></Input>
    </div>
  );
};

export default Search;
