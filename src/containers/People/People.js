import React, { Component } from 'react';

import PeopleTable from '../../components/PeopleTable/PeopleTable';

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
      }
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
          [...people.slice(personIndex + 1)]
        ]
      }
    });
  }

  render() {
    return (
      <PeopleTable
        people={this.state.people}
        toggleFollowing={this.toggleFollowing}
      />
    );
  }
}

export default People;