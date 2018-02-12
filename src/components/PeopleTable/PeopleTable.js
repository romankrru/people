import React, {Fragment} from 'react';

import styles from './PeopleTable.css';
import Person from '../Person/Person';

const PeopleTable = (props) => {
  const people = props.people.map(person => {
    return (
      <tr key={person.id} >
        <td>
          <Person
            name={person.name}
            avatar={person.avatar}
            rating={person.rating}
            isFollowing={person.isFollowing}
          />
        </td>
        <td className={styles.PeopleTableStat}>{person.stats.ideas}</td>
        <td className={styles.PeopleTableStat}>{person.stats.following}</td>
        <td className={styles.PeopleTableStat}>{person.stats.followers}</td>
      </tr>
    );
  });

  return (
    <Fragment>
      <div className={styles.PeopleTableCaption}>
        <i className={`fas fa-users ${styles.PeopleTableCaptionIcon}`} />
        PEOPLE
      </div>
       <div className={styles.PeopleTableWrapper}>
        <table  className={styles.PeopleTable}>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Ideas</th>
              <th>Following</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>
            {people}
          </tbody>
        </table>
      </div>
    </Fragment>
   
  );
}

export default PeopleTable;