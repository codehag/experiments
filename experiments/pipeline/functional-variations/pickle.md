#### Pickle Helpers

```javascript
const dayInMilliseconds = 86400000;

wash(type) {
  return `clean-${type}`;
}

cut(type) {
  return `cut-${type}`;
}

pound(type) {
  return `crushed-${type}`;
}

class Jar {
  constructor(type, count) {
    this.type = type;
    this.ingredients = [];
    this.count = count;
  }

  updateType(type) {
    this.pickleType = type;
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  takeOne() {
    this.count = this.count - 1;
  }
}

add(ingredients, jar) {
  ingredients.forEach(ingredient => jar.addIngredient(ingredient));
  return jar;
}

salt(jar) {
  return add(["salt"], jar);
}

ferment(jar, days) {
  return new Promise(resolve, reject) {
    if (!jar) {
      throw Error("No Pickle Jar!");
    }
    if (!days) {
      throw Error("No day length provided");
    }
    setTimeout(() => {
      const pickle = `Pickled ${jar.type}`
      jar.updateType(pickle);
      resolve(jar);
    }, days * dayInMilliseconds);
  }
}
```

#### Pickle test 1: Basic Pickle

```javascript
const pickleJar = await ferment(salt(add("water", new Jar(wash("cucumber")))), 2);
const pickle = pickleJar.takeOne();
```

```javascript
const washedCucumber = wash("cucumber");
const cucumberJar = new Jar(washedCucumber);
const wateryCucumberJar = add("water", cucumberJar);
const saltyCucumberJar = salt(wateryCucumberJar);
const pickleJar = await ferment(saltyCucumberJar, 2);
const pickle = pickleJar.takeOne();
```

```javascript
const pickle = "cucumber"
  |> wash
  |> (_ => new Jar(_))
  |> (_ => add("water", _))
  |> salt
  |> (_ => ferment(_, 2))
  |> (_ => _.then(pickleJar => pickleJar.takeOne()))
```

```javascript
const pickle = "cucumber"
  |> wash
  |> (_ => new Jar(_))
  |> (_ => add("water", _))
  |> salt
  |> (_ => ferment(_, 2))
  |> await
  |> (_ => _.takeOne());
```

```javascript
const pickle = "cucumber"
  |> wash
  |> new Jar(#)
  |> add("water", #)
  |> salt
  |> ferment(#, 2)
  |> await #
  |> #.takeOne()
```

## Bug in the pickle jar

Oh no! there is a bug in both of our saurkraut jars. The jars were made either method you saw before.  Read the snippit and find it's bug.

```javascript
const saurkrautJar = await ferment(
  salt(
    add(
      ["water"],
      new Jar(wash("cabbage"), 10)
    )
  )
);
const saurkraut = saurkrautJar.takeOne();

// Error: No day length provided
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
const washedCabbage = wash("cabbage");
const cutCabbage = cut(washedCabbage);
const crushedCabbage = pound(cutCabbage);
const cabbageJar = new Jar(crushedCabbage);
const saltyCabbageJar = salt(cabbageJar);
const saurkrautJar = ferment(saltyCabbageJar, 2);
const saurkraut = saurkrautJar.takeOne();

// Error, saurkrautJar.takeOne is not a function
```
The bug is on line ...
1
2
3
4
5
6
7


Minimal Jar
```javascript
const saurkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> (_ => new Jar(_))
  |> salt
  |> ferment(_, 14)
  |> (_ => _.then(jar => jar.takeOne))

// Error: No Pickle Jar!
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
const saurkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> (_ => new Jar(_)
  |> salt
  |> (_ => ferment(_, 14))
  |> await
  |> (_ => _.takeOne())

// SyntaxError: missing ) in parenthetical
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
const saurkraut = "cabbage"
  |> wash
  |> cut
  |> pound
  |> new Jar(#)
  |> add(["water"], #)
  |> salt
  |> ferment(#, 14)
  |> await
  |> #.takeOne()

// Error: # is undefined
```

The bug is on line ...
1
2
3
4
5
6
7

### Refactor a kimchi jar

We have a different recipe, this time for kimchi. It is written like this:

```javascript
const pasteIngredients = ["garlic", "ginger", "sugar", "fish sauce"];
function makePaste(pasteName, [firstIngredient, ...rest]) {
  return new Promise(resolve) {
    setTimeout(() => {
      resolve(`${pasteName} made from ${rest.join(", ")} and ${firstIngredient}`);
    , 9000}
  }
}

const kimchiJar = await ferment(
    stir(
      add(
        await makePaste(
          "spicy paste",
          ingredients
        ),
        new Jar(
          salt(
            cut(
              wash("cabbage")
            )
          )
        )
      )
    ), 2
  )
);

const kimchi = kimchiJar.takeOne();
```

How would you refactor this?
