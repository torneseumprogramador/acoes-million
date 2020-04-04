const supertest = require('supertest');
const Acao = require('../../app/models/acao');
const TOKEN = "123456";
const app = require('../../app.js');
const request = supertest(app);

describe("AcoesController", () =>{
  beforeEach(async() => {
    await Acao.deleteMany({}, async(err, removed) => {
      await Acao.create({
        nome_empresa: "Itausa Investimentos Itau SA",
        cod_empresa: "ITSA3",
        taxa_juros: "3",
        tipo: "ON"
      })

      await Acao.create({
        nome_empresa: "Banco Inter SA",
        cod_empresa: "bidi4",
        taxa_juros: "7",
        tipo: "pn"
      })
    })
  });

  describe("POST /acoes.json - Deve retornar se o controller de Acoes (AcoesController)", () => {
    it('cadastrou uma ação', async(done) => {

      body = {
        nome_empresa: "Petroleo Brasileiro SA Petrobras Preference Shares",
        cod_empresa: "petr4",
        taxa_juros: "8",
        tipo: "pn"
      }

      const response = await request.post('/acoes.json').set('token', TOKEN).send(body)
      expect(response.status).toBe(201)
      done()
    });
  });

});