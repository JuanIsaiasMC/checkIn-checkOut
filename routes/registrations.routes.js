const express = require('express')
const { getAllRegistrations, getOneRegistrations, createRegistrations, updateRegistrations, deleteRegistrations } = require('../controllers/registrations.controller')

const registrationsRouter = express.Router()

registrationsRouter.get('/', getAllRegistrations)
registrationsRouter.get('/:id', getOneRegistrations)
registrationsRouter.post('/', createRegistrations)
registrationsRouter.patch('/:id', updateRegistrations)
registrationsRouter.delete('/:id', deleteRegistrations)

module.exports = { registrationsRouter }