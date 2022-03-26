import React from 'react';

const renderBullets = (foodItem) => {
  return <div>{/* <li>{foodItem}</li> */}</div>;
};

const todaysFood = ({ todaysFood }) => {
  console.log(todaysFood.dave);
  return (
    <div>
      <h1>Food Comp</h1>
      {/* {renderBullets(todaysFood)} */}
    </div>
  );
};

export default todaysFood;
