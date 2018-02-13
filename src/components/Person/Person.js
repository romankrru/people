import React from 'react';

import styles from './Person.css';
import Button from '../Button/Button'
import ratingIcon from '../../assets/img/icons/rating.svg';
import avatarPlaceholder from '../../assets/img/avatar-placeholder.jpg';

const Person = (props) => {
  return (
    <div className={styles.Person}>
      <img src={props.avatar || avatarPlaceholder} alt={props.name} className={styles.PersonAvatar} />
      <div>
        <a href="" className={styles.PersonName}>{props.name}</a>
        <div className={styles.PersonRating}>
          <img src={ratingIcon} alt="rating" className={styles.PersonRatingIcon} />
          {props.rating}
        </div>
      </div>
      <Button
        buttonType="toggle"
        className={styles.PersonButton}
        isActive={props.isFollowing}
        onClick={props.toggleFollowing}
      >
        {props.isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
    </div>
  )
};

export default Person;