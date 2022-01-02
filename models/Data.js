const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    call_type: {
        type: String
    },
    
    date: {
        type: Date
    }
});

module.exports = mongoose.model('Data', DataSchema);