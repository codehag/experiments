# Syntax
- `|>`
- `pipe()`
- `->`
- `:|`

Verifiable claims:
- readability (developer assessed, timing)
- sentiment (developer assessed, timing)

Order of tests:
  - Comprehension test
  - select case ['base case', 'advanced use', 'implementation']
    - random vs `pipe`
    - random vs `->`
    - random vs `:|`
    - random vs `|>`
  - which was most difficult to read?
  - which was your favorit syntax?
  - is this something you would use?

## Test cases:

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

## `|>`

#### base case
```javascript
let result = exclaim(capitalize(doubleSay("hello")));
result //=> "Hello, hello!"

let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;

result //=> "Hello, hello!"
```

#### advanced case

```javascript
let newScore = person.score
  |> double
  |> (_ => add(7, _))
  |> (_ => boundScore(0, 100, _));

newScore //=> 57
```

```javascript
import Lazy from 'lazy.js'

getAllPlayers()
  .filter( p => p.score > 100 )
  .sort()
|> (_ => Lazy(_)
  .map( p => p.name )
  .take(5))
|> (_ => renderLeaderboard('#my-div', _));
```

## `pipe()` and `compose()`

#### base case
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

#### advanced case

```javascript
let newScore = pipe(
  person.score,
  double,
  (_ => add(7, _)),
  (_ => boundScore(0, 100, _))
);

newScore //=> 57
```

```javascript
import Lazy from 'lazy.js'

pipe(
  getAllPlayers()
    .filter( p => p.score > 100 )
    .sort(),
  (_ => Lazy(_)
    .map( p => p.name )
    .take(5)),
  (_ => renderLeaderboard('#my-div', _)
);
```


## `->`

#### Base case

```javascript
let result = exclaim(capitalize(doubleSay("hello")));
result //=> "Hello, hello!"

let result = "hello"
  -> doubleSay
  -> capitalize
  -> exclaim;

result //=> "Hello, hello!"
```

#### advanced case

```javascript
let newScore = person.score
  -> double
  -> (_ => add(7, _))
  -> (_ => boundScore(0, 100, _));

newScore //=> 57
```

```javascript
import Lazy from 'lazy.js'

getAllPlayers()
  .filter( p => p.score > 100 )
  .sort()
-> (_ => Lazy(_)
  .map( p => p.name )
  .take(5))
-> (_ => renderLeaderboard('#my-div', _));
```


## `:|`

#### base case

```javascript
let result = exclaim(capitalize(doubleSay("hello")));
result //=> "Hello, hello!"

let result = "hello"
  :| doubleSay
  :| capitalize
  :| exclaim;

result //=> "Hello, hello!"
```

#### advanced case

```javascript
let newScore = person.score
  :| double
  :| (_ => add(7, _))
  :| (_ => boundScore(0, 100, _));

newScore //=> 57
```

```javascript
import Lazy from 'lazy.js'

getAllPlayers()
  .filter( p => p.score > 100 )
  .sort()
:| (_ => Lazy(_)
  .map( p => p.name )
  .take(5))
:| (_ => renderLeaderboard('#my-div', _));
```

## Assessment questions
- out of the proposals you saw, which one do you prefer the most?
- `|>`
- `pipe()`
- `->`
- `:|`

- out of the proposals you saw, which one is the one you like the least?
- `|>`
- `pipe()`
- `->`
- `:|`
