const express = require('express');
const router = express.Router();
const pokemon = require('../services/pokedex_service');

/* GET pokedex. */
router.get('/', async function(req, res, next) {
  console.log('Je suis un GET')
  try {
    res.json(await pokemon.pokedex_get(req.query.pokedex_id));
  } catch (err) {
    console.error(`Error while getting all pokedex`, err.message);
    next(err);
  }
});


/* POST pokedex entry */
router.post('/', async function(req, res, next) {
  try {
    res.json(await pokemon.pokedex_add(req.body));
  } catch (err) {
    console.error(`Error while creating pokedex entry`, err.message);
    next(err);
  }
});


/* PUT pokedex entry */
router.put('/', async function(req, res, next) {
  console.log('Je suis un PUT')
  try {
    res.json(await pokemon.pokedex_update(req.body));
  } catch (err) {
    console.error(`Error while updating pokedex`, err.message);
    next(err);
  }
});

/* DELETE pokemon entry */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await pokemon.pokemon_created_delete(req.params.id));
    res.json(await pokemon.pokedex_delete(req.params.id));
  } catch (err) {
    console.error(`Error while deleting pokemon`, err.message);
    next(err);
  }
});


module.exports = router;