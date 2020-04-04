const mongoose = require('../../db/conexao');

const Acoes = mongoose.model('acoes',{
    nome_empresa : {type: String, required: true},
    cod_empresa : {type: Number, required: true},
    
});