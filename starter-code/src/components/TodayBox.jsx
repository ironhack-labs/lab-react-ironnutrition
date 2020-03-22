import React from "react";

const TodayBox = ({ today, setToday, ...rest }) => {
  const item = { ...rest };
  return (
    <li>
      {item.amount} {item.name} = {item.calories * item.amount}{" "}
      <a href="#" onClick={e => setToday(today.filter(i => i.name !== item.name))}>
        Delete
      </a>
    </li>
  );
};

export default TodayBox;
