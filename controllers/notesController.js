import { Note } from '../models/Note.js'

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getNotesById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        res.status(200).json(note)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createNotes = async (req, res) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    })
    try {
        const newNote = await note.save()
        res.status(200).json(newNote)
        }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const editNotes = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators:true })
        res.status(200).json(note)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const deleteNotes = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'note deleted'})
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}