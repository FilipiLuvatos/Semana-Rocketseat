const mongose = require('mongoose');

const ProductSchema = new mongose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    url:{
        type: String,
        required: true,

    },
    createAt:{
        type: Date,
        required: Date.now,

    },
})
moogose.model('Product', ProductSchema);