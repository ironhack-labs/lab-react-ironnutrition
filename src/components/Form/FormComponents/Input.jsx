const Input = ({
  type = 'text',
  value,
  onChange,
  id,
  name,
  placeholder,
  error,
  min,
}) => {
  const commonProps = {
    value,
    onChange,
    id,
    name,
    placeholder,
    className: `form-control ${error ? 'is-invalid' : ''}`,
  };
  return <input type={type} min={min} {...commonProps} />;
};

export default Input;
