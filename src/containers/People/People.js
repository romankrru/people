import React, { Component } from 'react';

import { 
  CustomTable, 
  Caption,
  Tbody,
  Thead,
  Tr,
  Th,
  Td
} from '../../components/CustomTable/CustomTable';
import Person from '../../components/Person/Person';
import peopleIcon from '../../assets/img/icons/people.svg';

class People extends Component {
  state = {
    people: [
      {
        id: 1,
        name: 'John Adams',
        avatar: 'static/avatars/1.jpeg',
        rating: '102',
        isFollowing: false,
        stats: {
          ideas: 0,
          following: 50,
          followers: 0,
        },
      },
      {
        id: 2,
        name: 'Kevin Malcolm',
        avatar: 'static/avatars/2.jpeg',
        rating: '1472',
        isFollowing: true,
        stats: {
          ideas: 20,
          following: 19,
          followers: 25,
        },
      },
      {
        id: 3,
        name: 'James Madison',
        avatar: 'static/avatars/3.jpeg',
        rating: '12',
        isFollowing: false,
        stats: {
          ideas: 20,
          following: 19,
          followers: 25,
        },
      },
      {
        id: 4,
        name: 'Kevin Malcolm',
        rating: '41',
        isFollowing: true,
        stats: {
          ideas: 10,
          following: 0,
          followers: 5,
        },
      },
      {
        id: 5,
        name: 'James Monroe',
        avatar: 'static/avatars/4.jpeg',
        rating: '2',
        isFollowing: false,
        stats: {
          ideas: 20,
          following: 19,
          followers: 25,
        },
      },
    ],
  }

  toggleFollowing = (personId) => {
    this.setState(prevState => {
      const { people } = prevState;

      const personIndex = people.findIndex(person => {
        return person.id === personId;
      });

      return {
        persons: [
          [...people.slice(0, personIndex)],
          people[personIndex].isFollowing = !people[personIndex].isFollowing,
          [...people.slice(personIndex + 1)],
        ],
      };
    });
  }

  render() {
    const people = this.state.people.map(person => {
      return (
        <Tr key={person.id}>
          <Td>
            <Person 
              name={person.name}
              avatar={person.avatar}
              rating={person.rating}
              isFollowing={person.isFollowing}
              toggleFollowing={() => this.toggleFollowing(person.id)}
            />
          </Td>
          <Td>{person.stats.ideas}</Td>
          <Td>{person.stats.following}</Td>
          <Td>{person.stats.followers}</Td>
        </Tr>
      );
    });
    
    return (
      <CustomTable>
        <Caption icon={peopleIcon}>PEOPLE</Caption>
        <Thead>
          <Th>&nbsp;</Th>
          <Th>Ideas</Th>
          <Th>Following</Th>
          <Th>Followers</Th>
        </Thead>
        <Tbody>
          {people}
        </Tbody>
      </CustomTable>
    );
  }
}

export default People;