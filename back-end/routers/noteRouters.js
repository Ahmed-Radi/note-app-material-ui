const Note = require('../model/noteModel');
const express = require('express');
const router = express.Router();

router.get('/note', async (req, res) => {
    const notes = await Note.find();
    res.status(200).send(notes);
})

router.post('/note', async (req, res) => {
    const note = await new Note(req.body).save();
    res.status(200).send(note);
})

router.delete('/note/:id', async (req, res) => {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedNote);
})

module.exports = router