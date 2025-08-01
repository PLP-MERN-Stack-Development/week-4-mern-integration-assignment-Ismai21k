const mongoose = require('mongoose');

// category Schema
const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: { type: String, trim: true }
});

module.exports = mongoose.model('Category', CategorySchema);

