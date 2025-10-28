const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    descricao:{
        type:String,
        required:true,
    },
    data:{
        type:Date,
        default: Date.now
    }    
});

module.exports = mongoose.model('Todo', todoSchema);