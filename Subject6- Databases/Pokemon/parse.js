import { readFileSync } from 'fs'
import { sequelize } from './connection.js'

const pokeJson = readFileSync('pokemons.json', 'utf8')
const data = JSON.parse(pokeJson)

const typeSet = new Set()
const townSet = new Set()
const trainerNamesSet = new Set()
const trainersSet = []

function generateSets() {
  const trainersArr = []
  for (const row of data) {
    typeSet.add(row.type)
    trainersArr.push(...row.ownedBy)
  }

  for (const trainer of trainersArr) {
    if (!trainerNamesSet.has(trainer.name)) {
      trainerNamesSet.add(trainer.name)
      townSet.add(trainer.town)
      trainersSet.push(trainer)
    }
  }
}

async function insertTowns() {
  for (const town of [...townSet]) {
    await sequelize.query(
      'INSERT INTO town (name) VALUES (:name)',
      { replacements: { name: town } }
    )
  }
  console.log('-- insert towns finished')
}

async function insertTypes() {
  for (const pokeType of [...typeSet]) {
    await sequelize.query(
      'INSERT INTO pokemon_type (name) VALUES (:name)',
      { replacements: { name: pokeType } }
    )
  }
  console.log('-- insert types finished')
}

async function insertTrainers() {
  for (const trainer of trainersSet) {
    const [results] = await sequelize.query(
      'SELECT id FROM town WHERE name = :name',
      { replacements: { name: trainer.town } }
    )
    const townId = results[0].id

    const query = 'INSERT INTO trainer (name, town_id) VALUES (:trainer_name, :townId)'
    await sequelize.query(query, {
      replacements: { trainer_name: trainer.name, townId }
    })
  }
  console.log('-- finished adding trainers')
}

async function insertPokemons() {
  for (const pokemon of data) {
    const [results] = await sequelize.query(
      'SELECT id FROM pokemon_type WHERE name = :typeName',
      { replacements: { typeName: pokemon.type } }
    )
    const typeId = results[0].id

    const query = `INSERT INTO pokemon (name, height, weight, type_id)
                   VALUES (:name, :height, :weight, :typeId)`
    await sequelize.query(query, {
      replacements: {
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        typeId
      }
    })
  }
  console.log('-- finished inserting pokemons')
}

async function insertPokemonTrainers() {
  for (const pokemon of data) {
    // get pokemon id
    let [results] = await sequelize.query(
      'SELECT id FROM pokemon WHERE name = :name',
      { replacements: { name: pokemon.name } }
    )
    const pokemonId = results[0].id

    for (const trainer of pokemon.ownedBy) {
      let [tres] = await sequelize.query(
        'SELECT id FROM trainer WHERE name = :name',
        { replacements: { name: trainer.name } }
      )
      const trainerId = tres[0].id

      const query = `INSERT INTO pokemon_trainer (pokemon_id, trainer_id)
                     VALUES (:pokemonId, :trainerId)`
      await sequelize.query(query, { replacements: { pokemonId, trainerId } })
    }
  }
  console.log('-- finished linking pokemon_trainer')
}

async function main() {
  generateSets()

  await insertTypes()
  await insertTowns()

  await insertTrainers()
  await insertPokemons()

  await insertPokemonTrainers()
}

main().catch(err => {
  console.error('Error during import:', err)
  process.exit(1)
})
