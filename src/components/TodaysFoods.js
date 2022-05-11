import React from 'react';

function TodaysFoods(props) {
  return (
    <>
      {props.today.map((x) => {
        return (
          <div>
            <h2>Today's foods</h2>
            <ul>
              <p>{x.name}</p>
            </ul>
            <p>
              {() => {
                return 0 + x.calories;
              }}
              cal
            </p>
          </div>
        );
      })}
    </>
  );
}

export default TodaysFoods;
