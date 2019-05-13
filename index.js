function wakeDog(dogName, dogBreed) {
  let dogPhrase = `Wake ${dogName} the ${dogBreed}`
  console.log(dogPhrase)
  return dogPhrase
}

function leashDog(dogName, dogBreed) {
  let dogPhrase = `Leash ${dogName} the ${dogBreed}`
  console.log(dogPhrase)
  return dogPhrase
}

function walkToPark(dogName, dogBreed) {
  let dogPhrase = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(dogPhrase)
  return dogPhrase
}

function throwFrisbee(dogName, dogBreed) {
  let dogPhrase = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(dogPhrase)
  return dogPhrase
}

function walkHome(dogName, dogBreed) {
  let dogPhrase = `Walk home with ${dogName} the ${dogBreed}`
  console.log(dogPhrase)
  return dogPhrase
}

function unleashDog(dogName, dogBreed) {
  let dogPhrase = `Unleash ${dogName} the ${dogBreed}`
  console.log(dogPhrase)
  return dogPhrase
}

const routine =
  [wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map(ex => ex(dogName, dogBreed))
} 
