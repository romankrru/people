import React, { Component } from 'react';

class People extends Component {
  state = {
    people: [
      {
        id: 1,
        name: 'John Adams',
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
        rating: '1472',
        isFollowing: false,
        stats: {
          ideas: 20,
          following: 19,
          followers: 25,
        },
      }
    ],
  }

  render() {
    return 'people';
  }
}

export default People;