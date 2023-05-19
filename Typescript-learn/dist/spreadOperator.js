"use strict";
const myFriends = ['soniya', 'sumana', 'priya'];
const newFriends = ['monika', 'muskan', 'sneha'];
myFriends.push(...newFriends);
console.log(myFriends);
// rest parameter
//const greetFriend = (friend1: string, friend2: string, friend3: string): void =>console.log(`hi ${friend1},${friend2},${friend3} `)
const greetFriend = (...friends) => friends.forEach((friend) => console.log(`hi${friend}`));
greetFriend('koila', 'jaana', 'mana');
const myBestFriend = {
    fullName: 'sunanda',
    age: 30
};
const [bestFriend] = myFriends;
const { fullName } = myBestFriend;
myFriends.push(...newFriends);
console.log(fullName);
