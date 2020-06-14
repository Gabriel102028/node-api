const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: { 
        type: String,
        required: true },
    createAt: { 
        type: Date,
        default: DataView.now }
});

mongoose.model('Product', ProductsSchema);