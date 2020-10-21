const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const schemaProduct = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

schemaProduct.plugin(mongoosePaginate)

module.exports = model('Product', schemaProduct)