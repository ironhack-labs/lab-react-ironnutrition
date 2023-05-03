import { useState } from 'react';
import { Input } from 'antd';

function FilterFood(props) {
  const [typedLetter, setTypedLetter] = useState('');

  const handleInput = (e) => {
    setTypedLetter(e.target.value.toLowerCase());
    props.filterFood(e.target.value.toLowerCase());
  };
  return (
    <div className="FilterFood">
      <label>Show foods by typed input:</label>
      <Input type="text" value={typedLetter} onChange={handleInput} />
    </div>
  );
}
export default FilterFood;
