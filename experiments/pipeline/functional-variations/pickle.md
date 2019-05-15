#### Pickle test 1: Basic Pickle

```javascript
const pickle = takePickle(await ferment(salt(add("water", makeJar(wash("cucumber")))), 2));
```

```javascript
const washedCucumber = wash("cucumber");
const cucumberJar = makeJar(washedCucumber);
const wateryCucumberJar = add("water", cucumberJar);
const saltyCucumberJar = salt(cucumberJar);
const pickleJar = await ferment(saltyCucumberJar);
const pickle = takePickle(pickleJar);
```

```javascript
"cucumber"
  |> wash
  |> makeJar
  |> (_ => fillJar("water", _))
  |> (_ => add("salt", _))
  |> ferment
  |> (_ => _.then(takePickle))
```

```javascript
"cucumber"
  |> wash
  |> makeJar
  |> (_ => fillJar("water", _))
  |> (_ => add("salt", _))
  |> ferment
  |> await
  |> takePickle
```

```javascript
"cucumber"
  |> wash
  |> makeJar
  |> fillJar("water", #)
  |> add("salt", #)
  |> ferment
  |> await #
  |> takePickle
```

## Properly slavic pickles

Properly slavic pickles have two extra ingredients, dill and cassius leaves. The dill be added
before you fill the jar with water, and the cassius leaves should be added after the salt. How would
you write this, using the pipeline operator (choose any variant)

## Bugs in the pickle jars

Oh no! there is a bug in all three of our pickle jars. Read each snippit and find it's bug.

Minimal Jar
```javascript
"cucumber"
  |> wash
  |> makeJar
  |> (_ => fillJar("water", _))
  |> (_ => add("salt", _))
  |> ferment(_)
  |> (_ => _.then(takePickle))

// Error in function ferment: Cannot ferment undefined
```

The bug is on line ...
1
2
3
4
5
6
7

```javascript
"cucumber"
  |> wash
  |> makeJar
  |> (_ => fillJar("water", _))
  |> (_ => add("salt", _))
  |> ferment
  |> await pickle
  |> takePickle

// Error in function takePickle: pickleJar is undefined
```

The bug is on line ...
1
2
3
4
5
6
7

```javascript
"cucumber"
  |> wash
  |> makeJar
  |> fillJar(#, "water")
  |> add("salt", #)
  |> ferment
  |> await
  |> takePickle

// Error in function takePickle: pickleJar is undefined
```

The bug is on line ...
1
2
3
4
5
6
7
