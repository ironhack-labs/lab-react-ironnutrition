import { Divider, Input } from 'antd';
import { useState } from 'react';

export default function Search({search}) {
    const [searchText, setSearchText] = useState("");

    return (
      <>
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input value={searchText} type="text" onChange={e => {
          const content = e.target.value;
          setSearchText(content);
          search(content);
        }} />
      </>
    );
  }