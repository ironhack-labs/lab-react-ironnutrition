const Button = ({ children, action, type = 'primary', disabled, role = 'button' }) => {

    if (role === 'submit') {
      return (
        <input onClick={action} type="submit" className={`btn btn-${type} ${disabled ? 'disabled' : ''}`} value={children} />
      )
    }
  
    return (
      <button onClick={action} className={`btn btn-${type} ${disabled ? 'disabled' : ''}`}>
        {children}
      </button>
    );
  };
  
  export default Button;