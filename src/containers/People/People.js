import React, { Component } from 'react';
import axios from 'axios';

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
    people: [],
  }

  componentDidMount() {
    axios.get('https://people-99bd8.firebaseio.com/people.json')
      .then(({ data }) => {
        const people = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key],
          };
        });

        this.setState({
          people,
        });
      })
      .catch(err => console.log(err));
  }

  toggleFollowing = (personId) => {
    this.setState(prevState => {
      const { people } = prevState;

      const personIndex = people.findIndex(person => {
        return person.id === personId;
      });

      axios.patch('https://people-99bd8.firebaseio.com/people.json', {
        [personId]: {
          ...people[personIndex],
          ...{ isFollowing: !people[personIndex].isFollowing },
        }
      }).catch(err => console.log(err));

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