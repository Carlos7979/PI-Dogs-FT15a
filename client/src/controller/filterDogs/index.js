function filterDogs(dispatch, setFilter, setFiltered, dogs, value, isUpdate, updateFiltered) {
    const filtered = [];
    !isUpdate && dispatch(setFilter(value));
    if (value === 'not registered') {
        for (const dog of dogs) {
            if (!dog.temperament) {
                filtered.push(dog);
            }
        }
    } else {
        for (const dog of dogs) {
            if (dog.temperament && dog.temperament.toLowerCase().includes(value)) {
                filtered.push(dog);
            }
        }
    }
    !isUpdate ? dispatch(setFiltered(filtered)) : dispatch(updateFiltered(filtered));
}

export default filterDogs;
