function wakeDog(dogName, dogBreed) {
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`
}

let routine = []
routine.push(wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog)
//routine.push(wakeDog(dogName, dogBreed), leashDog(dogName, dogBreed), walkToPark(dogName, dogBreed), throwFrisbee(dogName, dogBreed), walkHome(dogName, dogBreed), unleashDog(dogName, dogBreed))
function exerciseDog(dogName, dogBreed){
  let rtn_arr = []
  for (let i = 0; i < routine.length; i = i+1){
    rtn_arr.push(routine[i](dogName, dogBreed))
  }
  return rtn_arr
}
