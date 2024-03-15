const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
mongoose.connect("mongodb+srv://prathapdg:iILRf5BX4ufhoNFt@cluster1.shmhfra.mongodb.net/realestate")
const connection = mongoose.connection
connection.on('error', err => console.log(err))
connection.on('connected', () => console.log('Mongo DB connection successful'))