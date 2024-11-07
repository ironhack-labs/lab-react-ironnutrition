import Empty from "../assets/empty.png";

const EmptyFood = () => {
  return (
    <div className="empty-page">
      <h2>"Oops! There is no more content to show."</h2>
      <img src={Empty} alt="Empty Cart" />
    </div>
  );
};

export default EmptyFood;
