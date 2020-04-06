var express = require('express');
var router = express.Router();
const HomeController = require("../app/controllers/home_controller");
const AcoesController = require("../app/controllers/acao_controller");

router.get("/", HomeController.index);
router.get("/acoes.json", AcoesController.index);
router.post("/acoes.json", AcoesController.create);

module.exports = router;

