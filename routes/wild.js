const express = require('express');
const router = express.Router();
const pokemon = require('../services/wild_service');



/* POST new wild pokemon */
router.post('/', async function(req, res, next) {
    try {
        
        res.json(await pokemon.wild_create());
    } catch (err) {
        console.error(`Error while generating wild pokemon`, err.message);
        next(err);
    }
});



/* DELETE flee wild pokemon */
router.delete('/', async function(req, res, next) {
    try {
      res.json(await pokemon.wild_flee());
    } catch (err) {
      console.error(`Error while deleting programming language`, err.message);
      next(err);
    }
});


  
module.exports = router;