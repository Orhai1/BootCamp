import { sequelize } from './connection.js'

//ex2
export async function getHeaviestPokemon() {
  const [results, metadata] = await sequelize.query(
    `SELECT *
     FROM pokemon
     WHERE weight = (SELECT MAX(weight) FROM pokemon);`
  )
  return results          
}

// ex3
export async function findByType(typeName) {
  const [results, metadata] = await sequelize.query(
    `SELECT p.name
     FROM pokemon AS p JOIN pokemon_type AS t ON t.id = p.type_id
     WHERE t.name = :typeName`,               
    { replacements: { typeName } }
  )
  return results
}

// ex4
export async function findOwners(pokemonName) {
  const [results, metadata] = await sequelize.query(
    `SELECT DISTINCT tr.name
     FROM trainer AS tr JOIN pokemon_trainer AS pt ON pt.trainer_id = tr.id
     JOIN pokemon AS p ON p.id = pt.pokemon_id
     WHERE p.name = :pokemonName`,
    { replacements: { pokemonName } }
  )
  return results
}

// ex5
export async function findRoster(trainerName) {
  const [results, metadata] = await sequelize.query(
    `SELECT DISTINCT p.name
     FROM pokemon AS p JOIN pokemon_trainer AS pt ON pt.pokemon_id = p.id
     JOIN trainer AS tr ON tr.id = pt.trainer_id
     WHERE tr.name = :trainerName`,
    { replacements: { trainerName } }
  )
  return results
}


async function main() {
  console.log(await getHeaviestPokemon())    
  console.log(await findByType('grass')) 
  console.log(await findOwners('gengar'))
  console.log(await findRoster('Loga'))
  await sequelize.close()
}
main().catch(e => { console.error(e); process.exit(1) })
