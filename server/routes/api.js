const { Router } = require('express')
const pokemons = require('../data/pokedex.json')

const api = Router()

api.get('/', function (req, res) {
  res.json(pokemons)
})

api.get('/:id', function (req, res) {
  let tabPokemon = []
  let id = req.params.id
  for (const pokemon of pokemons) {

    if (pokemon.ndex === id) {
      tabPokemon.push(pokemon)
    }
  }
  res.json(tabPokemon)

})


module.exports = api
