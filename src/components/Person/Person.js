import React from 'react';

import styles from './Person.css';
import Button from '../Button/Button'

const Person = (props) => {
  return (
    <div className={styles.Person}>
      <img src={props.avatar} alt={props.name} className={styles.PersonAvatar}/>
      <div>
        <a href="" className={styles.PersonName}>{props.name}</a>
        <div className={styles.PersonRating}>
          <i className={`fas fa-signal ${styles.PersonRatingIcon}`}></i>
          {props.rating}
        </div>
      </div>
      <Button
        buttonType="toggle"
        className={styles.PersonButton}
        isActive={props.isFollowing}
        activeText="Unfollow"
        inactiveText="Follow"
      >
        {props.isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
    </div>
  )
};

export default Person;