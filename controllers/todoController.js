const Todo = require('../model/Todo');

module.exports.adicionarTarefa = async(req,res)=>{
    const {tarefa} = req.body;

    try {
        const novaTarefa = new Todo({tarefa})
        await novaTarefa.save();
        res.status(201).json({msg:'Tarefa cadastrada com sucesso'});
    } catch (error) {
        res.status(500).json({msg:'Erro ao cadastrar tarefa'})
    }
};

module.exports.carregarTarefas = async(req,res)=>{
    try {
        const tarefas = await Todo.find().exec();
        res.json(tarefas);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Erro ao carregar tarefas'})
    }
};