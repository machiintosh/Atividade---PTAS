var express = require("express");
var app = express();
var { usuario } = require("./models")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/:id", async function(req, res){
  const resultado = await usuario.findByPk(req.params.id);
  res.json(resultado);
});

app.get("/", async function(req, res){
  const resultado = await usuario.findAll();
  res.json(resultado);
});

app.post("/", function(req, res){
  const resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", async function(req, res){
  const atualizar = await usuario.findByPk(req.params.id);
  res.send(atualizar.nome = "Igor")

  const resultadoSave = await atualizar.save();
  console.log(resultadoSave)
})

app.delete("/:id", async function(req, res){
  const deletar = await usuario.findByPk(req.params.id);
  deletar.destroy();
})

app.listen(3000, function(){
  console.log("O servidor está sambando com as araras")
})