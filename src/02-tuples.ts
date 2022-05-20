const prices: (number | string)[] = [1, 2, 3, 4, 5, 6, 'sd'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user = ['abraham', 12];
// user = ['12', 12]

// user = []
// user = ['abraham']
// user = ['12', 12]
user = ['abraham', 12, true];
const [username, age] = user;
console.log(username);
console.log(age);
