## Introduction

This is an overview of the first experiment run within the context of the TC39. Mistakes were made,
but this document should help us find our footing.

## Experiment Design

![image][./images/experiment-design.png]

Branching:

The experiment had the following branching structure:


## Participant profile building

Participants were asked how they identify their control of the JavaScript language: Expert, Advanced
or beginner. The spread was as follows:

![image][./images/participant-self-identification-rank.png]

### Participant questions

![image][./images/participant-self-identification-rank-overlap.png]

## Introduction of task

If the participants were selected for the evaluation of the two existing patterns, they were
introduced to both in the following form:

If the participants were selected for the evaluation of one of the proposals, they were introduced
to the proposal in the following way

They were also requested to give feedback on whether or not they prefered the proposal or the
original form of the code.


## Error insertion patterns

I tried to take inspiration about how errors could be
inserted, but I'm afraid now that this might have not been strict enough.

Since the proposal introduced syntax, it seemed like a good candidate for testing was error
localization. However as I investigated further, I discovered there were certain syntax
errors that were more likely in one context then the other while other syntax errors _looked_
correct compared to others, and required the reader to run the code mentally in order to catch it.

The inserted error patterns break down as follows:

Simple errors:

Simple errors are errors that can be captured by careful reading. I was interested in how the speed
of a reader could be impacted for simple syntax errors. There is tooling for this, but the tooling
is a compensation for this process of reading, and much like new syntax can make errors self
evident.

Examples of simple errors are parentheticals, parentheticals, and spelling mistakes

### Simple errors

#### errors with parentheticals

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> (_ => new Jar(_) // Correction: (_ => new Jar(_))
  |> salt
  |> (_ => ferment(_, 14))
  |> await
  |> (_ => _.takeOne())

// SyntaxError: missing ) in parenthetical
```

```javascript
const washedCabbage = wash("cabbage");
const cutCabbage = cut(washedCabbage);
const crushedCabbage = poundcutCabbage); // Correction: const crushedCabbage = pound(cutCabbage);
const cabbageJar = new Jar(crushedCabbage);
const saltyCabbageJar = salt(cabbageJar);
const sauerkrautJar = await ferment(saltyCabbageJar, 14);
const sauerkraut = sauerkrautJar.takeOne();

// SyntaxError: unexpected token: ')'
```

```javascript
const sauerkrautJar = await ferment(
  salt(
    new Jar // Correction: a `(` should be added here : new Jar(
      pound(
        cut(
          wash("cabbage")
        )
      )
    )
  ), 14
);
const sauerkraut = sauerkrautJar.takeOne();

// SyntaxError: unexpected token: ')'
```
**************************

#### Early termination (Pipeline only)

Check how obvious an early termination might be in both pipeline operator examples

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> (_ => new Jar(_)); // Correction: remove ;
  |> salt
  |> (_ => ferment(_, 14))
  |> await
  |> (_ => _.takeOne())

// SyntaxError: Unexpected token `|`
```

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> new Jar(#); // Correction: remove ;
  |> add("water", #)
  |> salt
  |> ferment(#, 2)
  |> await #
  |> #.takeOne()

// SyntaxError: unexpected token `|`
```

******************

### Missing second argument

The second argument is tricky in all cases except for the flattened
version. In the case of the nested version, it is difficult to identify which
expression is being completed by which parenthesis. In the case of the
pipeline operator, it is difficult to tell if passing a single argument is
intended.

Issue with this approach: I think I was wrong thinking that the flattened version would be
too self evident. It might be more realistic and reflect how the pipeline operator
might evolve to be treated over time. Still a tricky thing to find, but perhaps not
as significant as I thought. This was an oversight on my part;

```javascript
const sauerkrautJar = await ferment(
  salt(
    new Jar(
      pound(
        cut(
          wash("cabbage")
        )
      )
    )
  ) // Should have a second argument for ferment
);
const sauerkraut = sauerkrautJar.takeOne();

// Error: No day length provided
```

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> (_ => new Jar(_))
  |> salt
  |> ferment // Correction: (_) => ferment(_, 14)
  |> await
  |> (_ => _.takeOne())


// Error: No day length provided
```

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> new Jar(#)
  |> add("water", #)
  |> salt
  |> ferment // Correction: ferment(#, 14)
  |> await #
  |> #.takeOne()

// Error: No day length provided
```

flattened is missing here, as it is closely related to "density reading" that is tested by
paranthetical and unique test for nested.


******************

### Await errors

```javascript
const washedCabbage = wash("cabbage");
const cutCabbage = cut(washedCabbage);
const crushedCabbage = pound(cutCabbage);
const cabbageJar = new Jar(crushedCabbage);
const saltyCabbageJar = salt(cabbageJar);
const sauerkrautJar = ferment(saltyCabbageJar, 14); // correction: await ferment(saltyCabbageJar, 14);
const sauerkraut = sauerkrautJar.takeOne();

// Error, ReferenceError: sauerkrautJar is not defined
```

```javascript
const sauerkrautJar = ferment( // Correction: const sauerkrautJar = await ferment(
  salt(
    new Jar(
      pound(
        cut(
          wash("cabbage")
        )
      )
    )
  ), 14
);
const sauerkraut = sauerkrautJar.takeOne();

// Error: sauerkrautJar.takeOne is not a function
```

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> new Jar(#)
  |> add("water", #)
  |> salt
  |> ferment(#, 14)
  |> await // Correction: await # or await ferment(#, 14)
  |> #.takeOne()

// SyntaxError: # is not defined
```

******************

### Instantiation errors

The new keyword can be confusing for new comers and the pipeline operator compounds this.
`new` can be used without instantiation, and the need to introduce parenthesis in the
pipeline operator is different from before.

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> new Jar // Correction: new Jar(#)
  |> add("water", #)
  |> salt
  |> ferment(#, 14)
  |> await #
  |> #.takeOne()

// Error: Jar must be instantiated with an initial ingredient
```
```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> new Jar // Correction: (_) => new Jar(_)
  |> salt
  |> (_ => ferment(_, 14))
  |> await
  |> (_ => _.takeOne())

// Error: Jar must be instantiated with an initial ingredient
```

overlap with paranthetical nested
no test for flattened but it could have been tested

```javascript
const washedCabbage = wash("cabbage");
const cutCabbage = cut(washedCabbage);
const crushedCabbage = pound(cutCabbage);
const cabbageJar = new Jar; // Correction: const cabbageJar = new Jar(crushedCabbage);
const saltyCabbageJar = salt(cabbageJar);
const sauerkrautJar = await ferment(saltyCabbageJar, 14);
const sauerkraut = sauerkrautJar.takeOne();

// Error: Jar must be instantiated with an initial ingredient
```

******************

### Pattern specific errors

Each form of writing the code introduced potential ways in which only that code could break. For
that I had a few pattern specific errors.

#### Simple Error

One pattern specific error is a simple spelling mistake. This error is more difficult to achieve
with the other patterns tested.

I have no proof for this, but i suspect the saccades related to code reading are not left to right,
but on both axis, left right / up down, and that coders read by skiping symbols that are unrelated
to their immediate search. This is closer to how speed readers read


```javascript
const washedCabbage = wash("cabbage");
const cutCabbage = cut(washedCabbage);
const crushedCabbage = pound(cutCabbage);
const cabbageJar = new Jar(crushedCabbage);
const saltyCabbageJar = salt(cabbageJar);
const sauerkrautJar = await ferment(saltCabbageJar, 14);
const sauerkraut = sauerkrautJar.takeOne();

// Error: saltCabbageJar is undefined
```

#### Cognative Errors

Both new patterns introduced by the pipline operator had interesting ways that they could fail for a
user, that were unique to them and could not be transfered to the other proposals easily.

*Smart pipeline*

The smart pipeline introduces a placeholder that may be used in special cases, such as
instanciations via the `new` keyword or multiple arguments. This is again relying on an error caused
by a saccade skip. The information appears correct, therefore it can be skipped. However it also
counts as a cognative error since the code would technically run.

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> new Jar(#)
  |> add("water", #)
  |> salt()
  |> ferment(#, 2)
  |> await #
  |> #.takeOne()

// SyntaxError: `#` is undefined
```

*F# pipeline*

F# has similar issues to the lambda function in general, since it relies on it. This test actually
relies on the failures that are inherent in lambda functions. That is, it has an implicit return if
there are no curly braces. this relies on the programmers familiarity with this feature.

```javascript
const sauerkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> (_ => {new Jar(_)})
  |> salt
  |> (_ => {ferment(_, 14)})
  |> await
  |> (_ => {_.takeOne()})


// Error: jar is undefined
```

### Issues with the experiment

Due to not being very familiar with the experimentation software, I ended up with very limited
results for some of the questions. Sometimes only 30 responses in total that could be worked with.
This makes it hard to measure whether the results are useful.

### Statistical Analysis

### Qualitative Analyisis

## Refactoring task

### Qualitative Analysis

## Reading Task

### Qualitative Analysis

## Reflection Task

### Qualitative Analysis

## Results

### Summary

### Key points

### What can not be determined from this data

## Conclusions and next steps

### Experiment refinement
### Alterations to experiment design
