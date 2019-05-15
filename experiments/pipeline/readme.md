# Pipeline operator

### JFeatures:

- new syntax introduced
- new control flow introduced

### Benefits:

- alternative to extending prototypes
- may be more readable
- reduces cyclomatic complexity

### Risks:

- higher cognative load due to two types of approaches to similar problems
- higher cognative load due to non-linguistic identifier used

## variations to test:

### Pipeline vs current spec

- `action1 |> action2`
- `action2(action1)`
- `action2(action1)`

Verifiable claims:
- more readable than ...
- difficult to understand (cognative load);
- error proneness
- error detection


### Syntax
- `|>`
- `.pipe()` and `compose()`
- `->`
- `:|`

Verifiable claims:
  - random vs `.pipe`
  - random vs `->`
  - random vs `:|`
  - random vs `|>`

- do you find this more readable than ...
- difficult to understand (cognative load);
  - highlight area that is difficult to understand
- error proneness
  - rewrite this function in the new syntax
- error detection
  - find the bug in this function

### Functional variations:
- Smart Pipeline behavior
- F# pipeline behavior

Verifiable claims:
- more readable than ...
- error proneness
- error detection

