import React from 'react';

import styles from './CustomTable.css';

export const Caption = props => {
  return (
    <div className={styles.CustomTableCaption}>
      <img src={props.icon} alt={props.children} className={styles.CustomTableCaptionIcon} />
      <span>{props.children}</span>
    </div>
  );
};

export const Tbody = props => {
  return props.children;
};

export const Thead = props => {
  return props.children;
};

export const Tr = props => {
  return (
    <tr>
      {props.children}
    </tr>
  );
};

export const Th = props => {
  return (
    <th>
      {props.children}
    </th>
  );
};

export const Td = props => {
  return (
    <td>
      {props.children}
    </td>
  );
};

export const CustomTable = props => {
  const mappedChildren = {};

  React.Children.forEach(props.children, child => {
    if (child.type) {
      mappedChildren[child.type.name] = child;
    }
  });

  return (
    <div>
      {mappedChildren.Caption}
      <div className={styles.CustomTableWrapper}>
        <table className={styles.CustomTable}>
          <thead>
            {mappedChildren.Thead}
          </thead>
          <tbody>
            {mappedChildren.Tbody}
          </tbody>
        </table>
      </div>
    </div>
  );
};