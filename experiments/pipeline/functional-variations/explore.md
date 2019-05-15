### Explore Case

The TC39 is currently considering a new operator, to improve code readability and help maintanence.

The operator is `|>` and is modelled after the "pipe" operator in Unix systems.

An example of this operator in action is as follows:

`x |> g |> a.f`

this would be equivalent to the following in current JavaScript:

`a.f(g(x))`

In this experiment, we would like to ask you how you would approach certain problems with this
syntax. How would you design this behavior?. There are 3 implementation problems that you will be given.
There is no right or wrong way to answer these, we are looking for your internal reaction to better
understand how developers would react to this instinctively.

#### Implement: base case

Construct a function using the pipeline operator `|>` so that the return value is "Hello, Hello!"

```javascript
function doubleSay (str, separator) {
  return str + separator + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}
```

#### Implement: What if one function was async?

Construct a function using the pipeline operator `|>` so that the return value is "Hello, Hello!"
In this case, we have an undeclared async function, `informSomeone` -- imagine that this does
something, but does not have an impact on the output.

```javascript
async informSomeone(str) {
 // insert side effect
}

function doubleSay (str, seperator) {
  return str + separateor + str;
}

function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}

async function exclaim (str) {
  await informSomeone(str);
  return str + '!';
}
```
How readable is the refactored code to you?

Which lines are difficult to read?

do you prefer the original code, or the refactored code?

#### Implement: refactoring old code part 1

This code can be refactored to use the pipeline operator, as the result of each call flows into the
next. How would you do it?

```javascript
const formattedInput = format(input);
const callback = () => formattedInpout * 5;
const intervalID = settimeout(callback);
processIntervalID(intervalID);
```

How readable is the refactored code to you?

Which lines are difficult to read?

do you prefer the origianl code, or the refactored code?

#### Implement: refactoring old code part 2

This is some old code that could be refactored to use pipelines. How would you do it?

```javascript
getFormattedNumber(callback) {
 const addition = // ... some functionality
 return callback(addition);
}

const input = await getInput();
const result = getFormattedNumber(x => g(input + x) * 2).toString();
```

How readable is the refactored code to you?

Which lines are difficult to read?

do you prefer the original code, or the refactored code?

