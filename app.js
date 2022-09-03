// primero traer express para crear nuestro servidor

const express = require('express')


const { registrationsRouter } = require('./routes/registrations.routes')

// const { db } = require('./utils/database.util')
// para importar Sequelize la S va en mayus
// const { Sequelize, DataTypes } = require('sequelize')
// establecer conexion con la base de datos, con la palabra reservada new creamos una nueva instancia
// const db = new Sequelize({
//     dialect: "postgres",
//     host: "localhost",
//     username: "postgres",
//     password: "16665",
//     port: 5432,
//     database: 'work horary checker',
//     logging: false
// })

// autenticar o verificar si nos conectamos correctamente a nuestra base de datos
// db.authenticate()
//     .then(() => console.log('database authenticate'))
//     .catch(err => console.log(err))
// db.sync()
//     .then(() => console.log('database synced'))
//     .catch(err => console.log(err))

// crear nuestro modelo o tambien llamada tabla



// iniciar nuestra app

const app = express()







// esto va casi al final del archivo 

app.use(express.json())

app.use('/api/v1/registrations', registrationsRouter)


app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} no existe en el servidor`
    })
})

module.exports = { app }

// const PORT = 3002
// app.listen(PORT, () => {
//     console.log('express app running')
// })