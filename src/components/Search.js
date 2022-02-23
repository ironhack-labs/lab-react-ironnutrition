import './Search.css';

export default function Search(props) {
  const { displayFoundFoods } = props;

  return (
    <section className="Search-section">
      <input
        type="text"
        className="input"
        onChange={displayFoundFoods}
        placeholder="Search..."
      />
    </section>
  );
}
