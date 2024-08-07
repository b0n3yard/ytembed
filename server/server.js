const {ApolloServer} = require('@apollo/server')

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const db = require('./config/connection')
const PORT  = process.env.port || 3333

db.on('open' , () =>{
    console.log('db connected')
    app.listen( PORT, ()=>{ console.log(`listening on ${PORT}`)})
})