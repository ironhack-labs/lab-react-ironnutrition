import React from 'react';
import { Input } from 'antd';

export default function Search({ search, onSearch }) {
  return (
    <div className='container w-50 mb-4'>
      <Input value={search} type="text" placeholder="Search food..." onChange={(event) => {onSearch(event.target.value)}} />
    </div>
  )
}
