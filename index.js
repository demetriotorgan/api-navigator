const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const routesTarefas = require('./routes/tarefaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin:'*',
}));
app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();    
  });

mongoose
    .connect(process.env.DATABASE_URL)
    .then(()=>console.log('Conectado ao MongoDB!'))
    .catch((err)=>console.log(err));

app.use('/', routesTarefas);

app.listen(PORT, ()=>console.log(`Rorando na porta ${PORT}`));