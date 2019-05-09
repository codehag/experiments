# Syntax
- `|>`
- nested calls

Verifiable claims:
- readability (developer assessed, timing)
- cognative load (developer assessed, timing)
- sentiment (developer assessed, timing)
- x takes longer than y (timing)
- frequency of correct implimentations (survey result)
- frequency of correctly identified bug

Order of tests:
  - Comprehension test
  - select case ['base case', 'advanced use', 'implementation']
  - which was most difficult to read?
  - which was your favorit syntax?
  - is this something you would use?


### Comprehension

```javascript
function doubleSay (str) {
  return str + ", " + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}

let result = exclaim(capitalize(doubleSay("hello")));
```

Question: What is the value of result?

#### rewrite case

Imagine the pipeline operater lands, and you need to refactor some code. How would you rewrite the
code calculating the result to use the pipeline operator?

```javascript
function add(x, y) {
  return x + y
}

function square(x) {
  return x * x
}

function divide(x, y) {
  return x / y
}

const result = add(5, square(divide(15, 3)))

```
### Find the bug side a

```javascript
function add(x, y) {
  return x + y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

const result = add(5, multiply(divide(15, 3)))
```

### Find the bug side b

```javascript
function add(x, y) {
  return x + y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

const result = 15
  |> (value => divide(value, 3)
  |> multiply
  |> (value => add(value, 5);
```

Why are we getting an error?


```javascript
let result = exclaim(capitalize(doubleSay("hello")));
result //=> "Hello, hello!"

let result = pipe(
  "hello",
  doubleSay,
  capitalize,
  exclaim,
);

result //=> "Hello, hello!"
```

