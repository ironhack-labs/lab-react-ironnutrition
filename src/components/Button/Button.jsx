const Button = ({ onClick, text, color = 'secondary', type = 'submit' }) => {
  return (
    <button type={type} className={`btn btn-${color}`} onClick={onClick}>
      <strong>{text}</strong>
    </button>
  );
};

export default Button;
