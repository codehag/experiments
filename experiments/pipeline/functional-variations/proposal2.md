### F# Pipelines

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

let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;

result //=> "Hello, hello!";
```

#### case 2
```javascript
promise
  |> await
  |> (x => doubleSay(x, ', '))
  |> capitalize
  |> (x => x + '!')
  |> (x => new User.Message(x))
  |> (x => stream.write(x))
  |> await
  |> console.log;
```

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

