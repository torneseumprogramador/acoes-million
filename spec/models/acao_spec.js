const AcoesUsuario = require("../../app/models/acao.js");
describe("Acões de empresas", () => {

  beforeEach(async() => {
    await Acao.deleteMany({}, async(err,removed) => {
      
      await Acao.create({
        nome_empresao: "Google",
        cod_empresa:"GOGL34",
        taxa_juros: "4",
        tipo: "ON"
      })
      
      await AcoesUsuario.create({
        nome_empresao: "Google",
        cod_empresa:"GOGL34",
        taxa_juros: "3",
        tipo: "ON"
      })
    
      await AcoesUsuario.create({
        nome_empresao: "Google",
        cod_empresa:"GOGL34",
        taxa_juros: "5",
        tipo: "ON"
      })
      
      await AcoesUsuario.create({
        nome_empresao: "Zoom",
        cod_empresa:"ZM001-alt",
        taxa_juros: "5",
        tipo: "PN"
      })
    })
  })
}); 