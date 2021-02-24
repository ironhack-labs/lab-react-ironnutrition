import 'bulma/css/bulma.css';

const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="button">
    {children}
  </button>
);
export default Button;
