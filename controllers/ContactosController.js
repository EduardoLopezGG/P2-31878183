const ContactosModel = require("../models/ContactosModel");

class ContactosController {
  constructor() {
    this.contactosModel = new ContactosModel();
    this.add = this.add.bind(this);
  }

  async add(req, res) {
    // Validar los datos del formulario

    const { email, name, mensaje } = req.body;

    if (!email || !name || !mensaje) {
      res.status(400).send("Faltan campos requeridos");
      return;
    }

    // Guardar los datos del formulario
    const ip = req.ip;
    const fecha = new Date().toISOString();

    try{
     await this.contactosModel.crearContacto(email, name, mensaje, ip, fecha);
     res.status(200).send("Felicidades, tu mensaje me ha llegado");
    }catch(error){
     res.status(500).send("Error enviando los datos");
        
    }
  }
}

module.exports = ContactosController;