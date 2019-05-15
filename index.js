

function wakeDog (dogName, dogBreed) {
    let routine = `Wake ${dogName} the ${dogBreed}`
    console.log(routine);
    return routine
}

function leashDog (dogName, dogBreed) {
    let routine = `Leash ${dogName} the ${dogBreed}`
    console.log(routine);
    return routine
}

function walkToPark (dogName, dogBreed) {
    let routine = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(routine);
    return routine
}

function throwFrisbee (dogName, dogBreed) {
    let routine = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(routine);
    return routine
}

function walkHome (dogName, dogBreed) {
    let routine = `Walk home with ${dogName} the ${dogBreed}`
    console.log(routine);
    return routine
}

function unleashDog (dogName, dogBreed) {
    let routine = `Unleash ${dogName} the ${dogBreed}`
    console.log(routine);
    return routine
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const array = []
    for (let i = 0; i < routine.length; i++) {
        array.push(routine[i](dogName, dogBreed))
    }
        return array
}