import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function InputLabelHorizontal({
  name,
  type,
  value,
  touch,
  error,
  onChange,
  onBlur,
}) {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label" htmlFor={name}>
          {name}
        </label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className={`control ${touch && error ? 'has-icons-right' : ''}`}>
            <input
              className={`input ${touch && error ? 'is-danger' : ''}`}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            {touch && error && (
              <span className="icon is-small is-right">
                <FontAwesome name="exclamation-triangle" />
              </span>
            )}
          </p>
          {touch && error && (
            <p className="help is-danger">{`Please, check ${name} are invalid`}</p>
          )}
        </div>
      </div>
    </div>
  );
}
