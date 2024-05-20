const toIndex = (req, res, next) => {
    res.render("index", { title: "Formulario" });
  };
  
  module.exports = toIndex;