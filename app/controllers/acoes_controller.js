const Acoes = require('../models/acoes');
const TOKEN = "123456";

const AcoesController = {
    index: async(req,res, next)=>{
        if(req.headers.token === TOKEN){
            try{ 
                const acoes = await Acoes.find({})
                return res.status(200).send(acoes)

            }
            catch(err){
                return res.status(401).send(err)
              }
            
        }
        return res.status(401).json({error: "Acesso negado API açoes-Token header inválido"})    
    }

}

module.exports = AcoesController;