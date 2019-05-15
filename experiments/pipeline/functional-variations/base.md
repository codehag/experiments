### Current practice

In this test, we are exploring the readability of the current status quo of JavaScript. There are
five cases you will be asked to read through, two interactive activies. One is to implement some
functionality, and the other is a bug hunt. At the end of this experiment, you will be asked for
your thoughts on how the code works and what you observed.

#### base case

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

#### Alternative list style:

```javascript
const input = "hello";
const doubledInput = doubleSay(input);
const capitalizedInput = capitalize(doubleInput);
const result = exclaim(capitalizedInput);
```
Please compare these two version of the same code, and answer the questions below.

#### Nested data structure
```javascript
console.log(
  await stream.write(
    new User.Message(
      capitalize(
        doubledSay(
          await promise
        )
      )
    )
  )
);
```


#### Alternative list style:

```javascript
const input = await promise;
const doubledInput = doubleSay(input);
const capitalizedInput = capitalize(doubleInput);
const message = new User.message(capitalizedInput);
const result = await stream.write(message);
console.log(result);
```

I prefer:
Version a
Version b

In the codebases that I have worked on, I see this version more often
Version A
Version b


#### Bug Hunt

```javascript
function doubleSay(str, separator = " ") {
  return str + separator + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}

let result = exclaim(capitalize(doubleSay("hello")));
test(result === "Hello, hello!") // returns false
```

Did you have difficulty with any part of this code, and if so, where?

#### Find the bug 2

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

const x = divide(15, 3);
const y = multiply(x);
const result = add(5, y);

// This code will throw
```
Did you have difficulty with any part of this code, and if so, where?


