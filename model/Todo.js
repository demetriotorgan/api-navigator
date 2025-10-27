const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    tarefa:{
        type:String,
        required:true,
    }    
});

module.exports = mongoose.model('Todo', todoSchema);