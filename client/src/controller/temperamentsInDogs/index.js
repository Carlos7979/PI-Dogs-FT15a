function temperamentsInDogs(dogs) {
    const temperaments = []
    let notRegistered;
    for (const dog of dogs) {
        if (dog.temperament) {
            const temperamentsInDog = dog.temperament.toLowerCase().split(', ');
            for (const temperament of temperamentsInDog) {
                if (!temperaments.some(e => e === temperament)){
                    temperaments.push(temperament);
                }
            }
        } else if (!notRegistered) {
            notRegistered = 'not registered';
        }
    }
    temperaments.sort()
    notRegistered && temperaments.unshift(notRegistered);
    temperaments.unshift('all');
    return temperaments;
}

export default temperamentsInDogs;