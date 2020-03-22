import React from "react";

const DeleteItem = ({ today, setToday, item }) => {
  console.log("TODAY IN DELETE", today);
  return (
    <a href="#" onClick={e => setToday(today.filter(i => i.name !== item.name))}>
      Delete
    </a>
  );
};

const TodayBox = ({ today, setToday, ...rest }) => {
  const item = { ...rest };
  return (
    <li>
      {item.amount} {item.name} = {item.calories * item.amount} <DeleteItem {...{ today, setToday, item }} />
    </li>
  );
};

export default TodayBox;
