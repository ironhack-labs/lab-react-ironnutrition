import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function Button({
  type,
  value,
  className,
  onClick,
  children,
  icon,
}) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      value={value}
      onClick={onClick}
    >
      {icon && (
        <span className="icon is-small">
          <FontAwesome name={icon} />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
