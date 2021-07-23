const db = require('./db');
const config = require('../config');
const helper = require('../helper');



async function pokedex_get(id=-1){
  if (id == -1){
    return db.query(`SELECT * FROM pokedex`);
  }
  else{
    return db.query(
      `SELECT * FROM pokedex WHERE idpokedex=?`,
      [
        id
      ]
    );
  }
}



async function pokedex_add(pokemon_data){
  const result = await db.query(
    `INSERT INTO pokedex 
    (pokemon_name,pokemon_rarity)
    VALUES
    (?,?)`, 
    [
      pokemon_data.pokemon_name, pokemon_data.pokemon_rarity
    ]
  );

  let message = 'Error in adding pokemon into pokedex';

  if (result.affectedRows) {
    message = 'pokemon added into successfully';
  }

  return {message};
}



async function pokedex_update(pokemon_data){
  const result = await db.query(
    `UPDATE pokedex 
    SET pokemon_name=?,pokemon_rarity=?
    WHERE idpokedex=?`, 
    [
      pokemon_data.pokemon_name, pokemon_data.pokemon_rarity, pokemon_data.pokedex_id
    ]
  );

  let message = 'Error in updating pokedex';

  if (result.affectedRows) {
    message = 'pokedex updated successfully';
  }

  return {message};
}


async function pokedex_delete(id){
  const result = await db.query(
    `DELETE FROM pokedex WHERE idpokedex=?`,
    [
      id
    ]
  );

  let message = 'Error in deleting pokemon';

  if (result.affectedRows) {
    message = 'pokemon deleted successfully';
  }

  return {message};
}

async function pokemon_created_delete(id){
  const result = await db.query(
    `DELETE FROM pokemon_created WHERE id_pokedex=?`,
    [
      id
    ]
  );

  let message = 'Error in deleting pokemon';

  if (result.affectedRows) {
    message = 'pokemon deleted successfully';
  }

  return {message};
}

module.exports = {
  pokedex_get,
  pokedex_add,
  pokedex_update,
  pokedex_delete,
  pokemon_created_delete
}