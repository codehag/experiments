const animals = ['cat', 'dog', 'mouse']  ;

function runAway(name) { 
  setTimeout(function() { 
    console.log(`${name} runs away`);
  }, 0); 
} 

for (let name in animals) {
  runAway(name); 
  console.log(`${name} enters`) ;
}

/****Questions:
*
* What is the order of outputs?
* - ‘Cat runs away’, ‘cat enters’, ‘dog runs away’, ‘dog enters’, ‘mouse runs away’, ‘mouse enters’
* - ‘Cat enters’, ‘cat runs away’, ‘dog enters’, ‘dog runs away’, ‘mouse enters’, ‘mouse runs away’
* - ‘Cat enters’, ‘dog enters’, ‘mouse enters’, ‘mouse runs away’, ‘mouse runs away’, ‘mouse runs away’
* - ‘Cat enters’, ‘dog enters’, ‘mouse enters’, ‘cat runs away’, ‘dog runs away’, ‘mouse runs away’
*
*****/
