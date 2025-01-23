const db = require("../models")

class Services {
  constructor(model) {
    this.model = model
  }

  async getAllRegisters() {
    return db[this.model].findAll()
  }

  // async pegaUmRegistroPorId(id) {
  //   return dataSource[this.model].findByPk(id);
  // }

  // async criaRegistro(dadosDoRegistro) {
  //   return dataSource[this.model].create(dadosDoRegistro);
  // }

  async atualizaRegistro(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: { id: id },
      }
    )
    if (listadeRegistrosAtualizados[0] === 0) {
      return false
    }
    return true
  }

  // async excluiRegistro(id) {
  //   return dataSource[this.model].destroy({ where: { id: id } });
  // }
}

module.exports = Services
