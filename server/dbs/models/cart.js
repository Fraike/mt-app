import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Cart = new Schema({
    id: {
        type: String,
        require: true
    },
    types: {
        type: String
    },
    areas: {
        type: Array,
        require: true
    }
})

export default mongoose.model('Cart',Cart)