const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
    }, details: {
        type: String,
    }, category: {
        type: String
    },
})

module.exports = noteSchema