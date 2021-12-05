import React from 'react';
import classNames from 'classnames';

interface Iprops {
  id: string;
  type: string;
  name: string;
  label: string;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  handleChange?: any;
  handleBlur?: any;
  value?: string;
}

const Input: React.FC<Iprops> = (props) => (
  <React.Fragment>
    <div className="flex justify-between">
      <label
        htmlFor="email"
        className={classNames('label-regular', {
          'label-error': props.error && props.touched,
        })}
      >
        {props.label}
      </label>
      {props.error && props.touched && <span className="text-sm text-red-600">{props.error}</span>}
    </div>
    <div className="mt-1">
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        disabled={props.disabled}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        className={props.error && props.touched ? 'input-error' : 'input-regular'}
      />
    </div>
  </React.Fragment>
);

export default Input;
