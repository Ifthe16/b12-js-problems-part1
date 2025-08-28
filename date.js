const today = new Date();
console.log(today);

const date = new Date('2062-10-19');
console.log(date);

console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());

const specificDate = new Date(2091, 0, 26);
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate);

console.log(specificDate.toLocaleDateString());
console.log(specificDate.toLocaleDateString('en-GB'));
console.log(specificDate.toLocaleDateString('bn-BD'));

console.log(specificDate.toDateString());
console.log(specificDate.toString());
console.log(specificDate.toISOString());
console.log(specificDate.toUTCString());

// unix epoch
// Time zone
// daylight saving
// moment.js
