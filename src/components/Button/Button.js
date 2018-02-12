import React, { Fragment } from 'react';

import styles from './Button.css';

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
    buttonContent = (
      <Fragment>
        <i
          className={
            `${props.isActive ? 'fas fa-check' : 'fas fa-plus'} ${styles.ButtonToggleIcon}`
          }
        />
        <div className={styles.ButtonToggleText}>{props.children}</div>
      </Fragment>
    );
  }

  return (
    <button className={attachedClasses.join(' ')}>
      {buttonContent}
    </button>
  );
};

export default Button;