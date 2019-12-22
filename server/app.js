const chalk = require('chalk')
const express = require('express')
const app = express()
const api = require('./routes/api')
const cors = require ('cors')

const port = 4000

app.use(cors())
app.use('/pokemons',api);




app.listen(port, function () {
  console.log(chalk.blue('Example app listening on port '+port+' !'))
}) 