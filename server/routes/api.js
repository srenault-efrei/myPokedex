const { Router } = require('express')
const pokemons = require('../data/pokedex.json')

const api = Router()

api.get('/', function (req, res) {
    res.json(pokemons)
  })

  module.exports = api
