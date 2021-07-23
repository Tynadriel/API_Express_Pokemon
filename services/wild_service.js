const db = require('./db');
const config = require('../config');
const helper = require('../helper');



async function wild_create(){
    
    var json_pokemon_rarity_ratity_total = await db.query(`Select idpokedex, pokemon_rarity, total_rarity 
    from pokedex left join (SELECT sum(pokemon_rarity) as total_rarity from pokedex) total_rarity_query 
    on true;`);

    var associative_table = transform_pokemon_json_into_associative_table(json_pokemon_rarity_ratity_total);
    
    const result = await db.query(
      `INSERT INTO pokemon_created 
      (id_pokedex, id_dresseur)
      VALUES 
      (?,0)`, 
      [
        helper.weightedRand(associative_table)
      ]
    );
    let message = 'Error in gernerate new wild pokemon';
  
    if (result.affectedRows) {
      message = 'New wild pokemon created successfully';
    }
  
    return {message};
}


function transform_pokemon_json_into_associative_table(json){
    var result=new Object();
    for(var i in json){
        result[json[i].idpokedex]=json[i].pokemon_rarity / json[i].total_rarity;
    }
    return result;
}


async function wild_flee(){
    const result = await db.query(
      `DELETE FROM pokemon_created WHERE id_dresseur=0`
    );
  
    let message = 'Error in deleting wild pokemon';
  
    if (result.affectedRows) {
      message = 'wild pokemon deleted successfully';
    }
  
    return {message};
}
  


module.exports = {
    wild_create,
    wild_flee
}