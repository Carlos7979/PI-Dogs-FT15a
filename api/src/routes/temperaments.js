const { Router } = require('express');
const { Temperament } = require('../db');
const { temperamentToSend } = require('../../utils')

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const temperaments = await Temperament.findAll();
        const temperamentsToSend = [];
        for (const temperament of temperaments) {
            temperamentsToSend.push(temperamentToSend(temperament));
        }
        res.json(temperamentsToSend);
    } catch (error) {
        // res.status(500).json({error: error.message});
        // return console.log('Error: ', error);
        next(error);
    }
});

module.exports = router;