const Button = ({ onClick, text, type = 'secondary' }) => {
  return (
    <button className={`btn btn-${type} w-50`} onClick={onClick}>
      <strong>{text}</strong>
    </button>
  );
};

export default Button;
