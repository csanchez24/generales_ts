import React from 'react';
import classNames from 'classnames';

interface Iprops {
  type: 'button' | 'submit';
  color: string;
  disabled?: boolean;
  clicked?: () => {};
}

const Button: React.FC<Iprops> = (props) => (
  <button
    type={props.type}
    disabled={props.disabled}
    className={classNames('button', `button-${props.color}`, {
      'button-disabled': props.disabled,
    })}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
