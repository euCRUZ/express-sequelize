const Controller = require("./Controller")
const PessoaServices = require("../services/PessoaServices.js")

const pessoasServices = new PessoaServices()

class PessoaController extends Controller {
  constructor() {
    super(pessoasServices)
  }
}

module.exports = PessoaController
