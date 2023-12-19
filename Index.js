var x = 10;
let y = 20;
const PI = 3.14;

if (condition) {
    // code to be executed if the condition is true
  } else if (anotherCondition) {
    // code to be executed if the first condition is false and this one is true
  } else {
    // code to be executed if none of the conditions are true
  }


  function add(a, b) {
    return a + b;
  }
  
  const multiply = function(a, b) {
    return a * b;
  };

let fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]);  // Outputs 'apple'

let person = {
  name: 'John',
  age: 30,
  isStudent: false,
};
console.log(person.name);  // Outputs 'John'


document.getElementById('myElement').textContent = 'New Text';


document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
  });