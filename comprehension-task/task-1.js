function add(x, y) {
  return x + y;
}

function addTo(x) { 
  return (y) => add(x, y);
} 

const addTen = addTo(10);

console.log(typeof add(1, 2));
console.log(typeof addTen);

/****Questions:
*
*    What is the result of the first console log?
*
*    What is the result of the second console log?
*    - A string
*    - An object
*    - An error
*    - A function
*    What is the type that is returned from `addTen(’15’)`?
*    - A number
*    - A number but with a value NaN
*    - A function
*    - A string
*
*    Which of these are equivalent to addTo(10)?
*
*    - add.bind(null, 10);
*    - add.call(null, 10);
*    - y => add(10, y);
*    - add.apply(null, [10]);
*
*****/

