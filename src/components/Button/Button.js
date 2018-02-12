import React, { Fragment } from 'react';

import styles from './Button.css';
import plusIcon from '../../assets/img/icons/plus.svg';
import checkIcon from '../../assets/img/icons/check.svg';

const Button = (props) => {
  const attachedClasses = [styles.Button];

  if (props.className) {
    attachedClasses.push(props.className);
  }

  if (props.buttonType === 'toggle') {
    attachedClasses.push(styles.ButtonToggle);
  }

  if (props.isActive) {
    attachedClasses.push(styles.ButtonToggleActive);
  }

  let buttonContent = props.children;

  if (props.buttonType === 'toggle') {
    console.log(props.isActive);
    buttonContent = (
      <Fragment>
        <img
          src={
            props.isActive ?
            checkIcon :
            plusIcon
          }
          alt={props.isActive ? 'Unfollow' : 'Follow'}
          className={styles.ButtonToggleIcon}
        />
        <div className={styles.ButtonToggleText}>{props.children}</div>
      </Fragment>
    );
  }

  return (
    <button 
      className={attachedClasses.join(' ')}
      onClick={props.onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;