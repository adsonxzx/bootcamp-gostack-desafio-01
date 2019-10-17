const express = require('express')
const server = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3333

let numAccess = 0

const countNumRequest = (req, res, next) => {
  numAccess++
  console.log(numAccess)
  next()
}

server.use(countNumRequest)
server.use(express.json())
server.use(routes)

server.listen(PORT, console.log(`server on ${PORT}`))