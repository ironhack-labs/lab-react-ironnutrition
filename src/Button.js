import './Button.css';

const Button = ({ switchForm }) => (
  <button onClick={switchForm} className="btn-add">
    +
  </button>
);

export default Button;
