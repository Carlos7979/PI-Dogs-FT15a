const { axios } = require('common');
const { Router } = require('express');
const { dogToSend } = require('../../utils');
const { Dog } = require('../db');
const router = Router();

router.post('/', async (req, res) => {
    // TODO
})

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        const localDbDogs = await Dog.findAll();
        const dogsToSend = [];
        const { name } = req.query;
        if (name) {
            for (const dog of dogs) {
                if (dog.name.includes(name)) {
                    dogsToSend.push(dogToSend(dog));
                }
            }
            if (localDbDogs && localDbDogs.length > 0) {
                for (const dog of localDbDogs) {
                    if (dog.name.includes(name)) {
                        dogsToSend.push(dog);
                    }
                }
            }
            return res.json(dogsToSend);
        }
        for (const dog of dogs) {
            dogsToSend.push(dogToSend(dog));
        }
        if (localDbDogs && localDbDogs.length > 0) {
            return res.json(dogsToSend.concat(localDbDogs));
        }
        res.json(dogsToSend);
    } catch (error) {
        return console.log('Error: ', error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const localDbDogs = await Dog.findByPk();
        if (localDbDogs && localDbDogs.length > 0) {
            return res.json(localDbDogs[0]);
        }
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        const { id } = req.params;
        const dog = dogs.filter(dog => {
            return dog.id == id;
        });
        return dog.length > 0 ? res.json(dogToSend(dog[0])) : 
            res.status(404).json({error: "There isn't any dog with the indicated id"});
    } catch (error) {
        return console.log('Error: ', error);
    }
});

module.exports = router;