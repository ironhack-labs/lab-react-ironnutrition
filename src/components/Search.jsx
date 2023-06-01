import { Divider, Input } from 'antd';

// Iteration 5
export default function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={undefined}
        type="text"
        onChange={(event) => {
          props.handleChangeSearchBar(event.target.value);
        }}
      />
    </>
  );
}
