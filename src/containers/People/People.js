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
      {
        id: 6,
        name: 'Andrew Jackson',
        avatar: 'static/avatars/5.jpeg',
        rating: '1234',
        isFollowing: false,
        stats: {
          ideas: 0,
          following: 129,
          followers: 2522,
        },
      },
      {
        id: 7,
        name: 'John Adams',
        avatar: 'static/avatars/6.jpeg',
        rating: '124',
        isFollowing: false,
        stats: {
          ideas: 32,
          following: 129,
          followers: 222,
        },
      },
      {
        id: 8,
        name: 'Kevin Malcolm',
        avatar: 'static/avatars/7.jpeg',
        rating: '134',
        isFollowing: false,
        stats: {
          ideas: 322,
          following: 0,
          followers: 0,
        },
      },
      {
        id: 9,
        name: 'James Madison',
        rating: '134',
        isFollowing: true,
        stats: {
          ideas: 322,
          following: 0,
          followers: 0,
        },
      },
      {
        id: 10,
        name: 'John Monroe',
        rating: '134',
        isFollowing: true,
        avatar: 'static/avatars/8.jpeg',
        stats: {
          ideas: 322,
          following: 0,
          followers: 0,
        },
      },
      {
        id: 11,
        name: 'James Malcolm',
        rating: 1,
        isFollowing: true,
        avatar: 'static/avatars/9.jpeg',
        stats: {
          ideas: 0,
          following: 1,
          followers: 1,
        },
      },
      {
        id: 12,
        name: 'John Malcolm',
        rating: '1',
        isFollowing: true,
        avatar: 'static/avatars/10.jpeg',
        stats: {
          ideas: 1,
          following: 32,
          followers: 87,
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
          <Tr>
            <Th>&nbsp;</Th>
            <Th>Ideas</Th>
            <Th>Following</Th>
            <Th>Followers</Th>
          </Tr>
        </Thead>
        <Tbody>
          {people}
        </Tbody>
      </CustomTable>
    );
  }
}

export default People;