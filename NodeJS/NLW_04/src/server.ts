import 'reflect-metadata'
import express from 'express'
const app = express()
import './database'

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello world' })
})

app.listen(3333, () => console.log('Server está rodando:'))
