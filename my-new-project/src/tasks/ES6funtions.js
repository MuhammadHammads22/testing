import { View, Text } from 'react-native';
import React from 'react';

const ES6Functions = () => {


  //  var, let, and const
  if (true) {
    var functionScoped = "Accessible outside this block"; // Function-scoped
    let blockScoped = "Accessible only inside this block"; // Block-scoped
    const blockScopedConst = "Immutable and block-scoped"; // Block-scoped and immutable

    console.log(blockScoped); // Output: Accessible only inside this block
  }
  try{
  console.log(functionScoped); 


//   this is giving error thats why wrap in try catch
  console.log(blockScoped);


  }catch(err){
    console.log(err)
  }
  // 2. Template literals
  const name = "ali";
  const greeting = `Hello, ${name}! Welcome to JavaScript practice.`;
  console.log(greeting);

  // 3. Arrow functions
  const add = (a, b) => a + b;
  console.log(add(5, 3)); // Output: 8

  // 4. Destructuring objects and arrays
  const user = { id: 1, username: "ali", age: 22 };
  const { id, username, age } = user;
  console.log(username); // Output: ali

  const numbers = [1, 2, 3, 4];
  const [first, second, ...rest] = numbers;
  console.log(rest); // Output: [3, 4]

  // 5. Spread/rest operators
  const person = { ...user, location: "Pakistan" };
  console.log(person); // Output: { id: 1, username: "ali", age: 22, location: "Pakistan" }

  const combined = [...numbers, 5, 6];
  console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

  // 6. Cloning (Shallow and Deep Cloning)
  const shallowClone = { ...user }; // Shallow clone
  shallowClone.username = "updatedAli";
  console.log(user.username); // Output: ali (original remains unaffected)

  // Deep cloning example:
  const deepClone = JSON.parse(JSON.stringify(user)); // Deep clone using JSON
  deepClone.username = "deepUpdatedAli";
  console.log(user.username); // Output: ali (deep clone doesn't affect the original object)

  // Note: The JSON method doesn't handle non-JSON-compatible data like functions or undefined.

  // Advanced deep clone (using a library like Lodash):
  // Uncomment after installing lodash:
  // import _ from 'lodash';
  // const deepCloneWithLodash = _.cloneDeep(user);

  // 7. Comparison of var, let, and const in loops
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log("var i:", i), 1000); // Output: 3, 3, 3 (same `i` for all iterations)
//   }

  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 1000); // Output: 0, 1, 2 (different `j` for each iteration)
  }

};

export { ES6Functions };
