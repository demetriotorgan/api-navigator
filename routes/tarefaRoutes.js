const express = require('express');
const { adicionarTarefa, carregarTarefas } = require('../controllers/todoController');
const router = express.Router();

router.post('/salvar-tarefa', adicionarTarefa);
router.get('/listar-tarefas', carregarTarefas);

module.exports = router;