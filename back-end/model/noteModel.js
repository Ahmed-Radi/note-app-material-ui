const mongoose = require('mongoose');
const NoteSchema = require('../schema/noteSchema');

const Note = mongoose.model('note', NoteSchema)

module.exports = Note