// app/mirage/fixtures/users.js

export default [
  {
    id: 1, 
    username: 'Papacidero',
    numberOfChirps: 2,
    numberOfFollowing: 5,
    numberOfFollowers: 5,
    // The new data:
    aboutMe: 'I like making stuff.',
    joinedAt: new Date('2015-06-08T09:30:26'),
    chirps: [1, 2],
    // Our two new attributes:
    followees: [1,2],
    followers: [1,2]
  },
  {
    id: 2, 
    username: 'Tatiana',
    numberOfChirps: 32,
    numberOfFollowing: 25,
    numberOfFollowers: 24,
    // The new data:
    aboutMe: 'Papas Wife .',
    joinedAt: new Date('2015-06-08T09:30:26'),
    chirps: [3, 4,5],
    // Our two new attributes:
    followees: [1,2],
    followers: [1,2]
  }
];