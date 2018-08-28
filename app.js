console.log('Starting App...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(1, 1);
console.log(res);
// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `\nHello ${user.username}! You are ${notes.age}.`);
