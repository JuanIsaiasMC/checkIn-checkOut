const { Registrations } = require('../models/registrations.model')

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registrations.findAll()
        res.status(200).json({
            status: 'succes',
            data: {
                registrations
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const getOneRegistrations = async (req, res) => {
    try {
        const { id } = req.params
        const registrations = await Registrations.findOne({ where: { id } })
        if (!registrations) {
            return res.status(404).json({
                status: 'error',
                message: 'register no encontrado'
            })
        }


        res.status(200).json({
            status: 'succes',
            data: {
                registrations
            }
        })

    } catch (error) {

    }
}



const createRegistrations = async (req, res) => {
    try {

        const { entranceTime } = req.body
        const newRegistrations = await Registrations.create({ entranceTime })
        res.status(201).json({
            status: 'succes',
            data: { newRegistrations }
        })
    } catch (error) {
        console.log(error)
    }
}


const updateRegistrations = async (req, res) => {
    try {
        const { id } = req.params
        const { exitTime } = req.body
        const registrations = await Registrations.findOne({ where: { id } })

        if (!registrations) {
            return res.status(404).json({
                status: 'error',
                message: 'register no encontrado'
            })
        }


        await registrations.update({ exitTime, status: "out" })

        res.status(200).json({
            status: 'succes',
            data: { updateRegistrations }
        })
    } catch (error) {
        console.log(error)
    }
}



const deleteRegistrations = async (req, res) => {
    try {
        const { id } = req.params
        const { exitTime } = req.body
        const registrations = await Registrations.findOne({ where: { id } })
        if (!registrations) {
            return res.status(404).json({
                status: 'error',
                message: 'register no existe'
            })
        }


        await registrations.update({ status: 'cancelled', exitTime })
        res.status(204).json({
            status: 'succes'
        })


    } catch (error) {
        console.log(error)
    }
}

module.exports = { createRegistrations, deleteRegistrations, getAllRegistrations, getOneRegistrations, updateRegistrations }
