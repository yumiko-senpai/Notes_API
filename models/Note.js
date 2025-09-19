import mongoose from "mongoose"

const NoteSchema = mongoose.Schema({
    title:String,
    content:String
})
export const Note = mongoose.model('Note', NoteSchema)
