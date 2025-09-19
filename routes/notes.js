import express from 'express'
import { getAllNotes, getNotesById, createNotes, editNotes, deleteNotes } from '../controllers/notesController.js'

export const router = express.Router()

router.get('/', getAllNotes)
router.get('/:id', getNotesById)
router.post('/', createNotes)
router.patch('/:id', editNotes)
router.delete('/:id', deleteNotes)
