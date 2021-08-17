const { axios } = require('common');
const { Router } = require('express');
const { dogToSendFromApi, dogToSendFromDB, middleware: { bodyValidator } } = require('../../utils');
const { Dog, Temperament } = require('../db');
const router = Router();

router.post('/', bodyValidator, async (req, res, next) => {
    try {
        const { name, height, weight, lifeSpan, urlImage, temperaments } = req.body;
        const dog = await Dog.create({
            name, height, weight, lifeSpan, urlImage
        });
        if (temperaments) {
            const temperamentsId = [];
            const lowerCaseTemperaments = temperaments.map(temperament => temperament.toLowerCase());
            for (const temperament of lowerCaseTemperaments) {
                await Temperament.findOrCreate({
                    where: {
                        name: temperament
                    }
                });
            }
            const temperamentsInDB = await Temperament.findAll({
                where: {
                    name: lowerCaseTemperaments
                }
            });
            for (const temperament of temperamentsInDB) {
                temperamentsId.push(temperament.dataValues.id);
            }

            await dog.setTemperaments(temperamentsId);
            const response = await Dog.findByPk(dog.dataValues.id, {
                include: Temperament
            });
            return res.status(200).json(dogToSendFromDB(response.dataValues));
        }

        if (!dog) return res.status(404).json({error: 'Dog is not created'});
        res.status(200).json(dogToSendFromDB(dog));
    } catch (error) {
        // res.status(500).json({error: error.message});
        // return console.log('Error: ', error);
        next(error);
    }
})

router.get('/', async (req, res, next) => {
    try { 
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        const localDbDogs = await Dog.findAll({
            include: Temperament
        });
        const dogsToSend = [];
        const { name } = req.query;
        if (name) {
            for (const dog of dogs) {
                if (dog.name.toLowerCase().includes(name.toLowerCase())) {
                    dogsToSend.push(dogToSendFromApi(dog));
                }
            }
            if (localDbDogs) {
                for (const dog of localDbDogs) {
                    if (dog.dataValues.name.toLowerCase().includes(name.toLowerCase())) {
                        dogsToSend.push(dogToSendFromDB(dog.dataValues));
                    }
                }
            }
            if (dogsToSend.length > 0) return res.json(dogsToSend);
            return res.status(404).json({error: "There isn't any dog with the indicated query name"});
        }
        for (const dog of dogs) {
            dogsToSend.push(dogToSendFromApi(dog));
        }
        if (localDbDogs) {
            for (const dog of localDbDogs) {
                dogsToSend.push(dogToSendFromDB(dog.dataValues));
            }
            return res.json(dogsToSend);
        }
        res.json(dogsToSend);
    } catch (error) {
        // res.status(500).json({error: error.message});
        // return console.log('Error: ', error);
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!Number.isNaN(id)) {
            const response = await Dog.findByPk(id, {
                include: Temperament
            });
            if (response) return res.json(dogToSendFromDB(response.dataValues));
        }
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        const dog = dogs.filter(dog => {
            return dog.id == id;
        });
        return dog.length > 0 ? res.json(dogToSendFromApi(dog[0])) : 
            res.status(404).json({error: "There isn't any dog with the indicated id"});
    } catch (error) {
        // res.status(500).json({error: error.message});
        // return console.log('Error: ', error);
        next(error);
    }
});

module.exports = router;