import mongoose from 'mongoose'
const Schema = mongoose.Schema
const CategroySchema = new Schema({
    city: {
        type: String
    },
    types: {
        type: String
    },
    areas: {
        type: Array,
        require: true
    }
})

export default mongoose.model('Categroy',CategroySchema)