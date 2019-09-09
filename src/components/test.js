// ==== const & let ====
let name = 'John';
let test;

name = 'Jack';

const person = {
  name: 'John',
  age: 33
};

person.name = 'Jack';

const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums);

// ==== arrow functions ====
const sayHello = name => console.log(`Hello ${name}`);

const fruits = ['Apples', 'Oranges', 'Grapes'];
// ==== forceach ====
fruits.forEach((fruit, index) => {
  console.log(fruit);
});

// ==== map ====
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(singleFruit);

// filter
// - normally use in reducx when you want to filter things out
const people = [
  {id: 1, name: 'Karen'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Sharon'}
];

const people2 = (people2 = people.filter(person => person.id !== 2));
console.log(people2); // will return Karen and Sharon

// spread
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
console.log(arr2); //return [1,2,3,4]

//use spread operator with filter
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

const person = {
  name: 'Brad',
  age: 36
};

const newPerson = {
  ...person,
  email: 'brad@gmail.com'
};

console.log(newPerson); // email will be added to brad

// ==== destructuring ====
// - use to pull values out of objects and arrays
const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main st',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};
console.log(profile.name);

// pull name out of profile
const {name} = profile;
console.log(name);

const {name, address, hobbies} = profile;
console.log(name, address.street, hobbies[0]);

const {street} = profile.address;
console.log(street);

const {street, city} = profile.address;
console.log(street, city);

// ==== classes ====
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

// instantiate
const person1 = new Person('John', 33);
const person2 = new Person('Sara', 28);

console.log(person1.greet());
console.log(person2.greet());

// ==== subclasses ====
class Customer extends Person {
  // use super(name, age) -- to inherit the Person properties
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1.info());

// modules
// file  (file1.js)
export const name = 'Jeff';
export const nums = [1, 2, 3];
export default Person;

// file 2 (file2.js)
import {name} from './file1';
import Person from './file1';
