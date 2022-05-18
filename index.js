var express = require("express");
var app = express();
var { usuario, empresa } = require("./models")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Página Inicial

app.get('/', async function(req, res){
  var pagina_inicial = "Seja bem vindo";
  res.json(pagina_inicial);
});

//Rotas para usuários

app.get("/usuarios/:id", async function(req, res){
  const resultado = await usuario.findByPk(req.params.id);
  res.json(resultado);
});

app.get("/usuarios", async function(req, res){
  const resultado = await usuario.findAll();
  res.json(resultado);
});

app.post("/usuarios", function(req, res){
  const resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuarios/:id", async function(req, res){
  var atualizar = await usuario.findByPk(req.params.id);
  
  var resultado = await atualizar.update(req.body);
  res.json(resultado);
})

app.delete("/usuarios/:id", async function(req, res){
  const deletar = await usuario.findByPk(req.params.id);
  deletar.destroy();
})

app.get("/usuarios/:id/empresa", async function(req, res){
  const resultado = await usuario.findByPk(req.params.id, {include: "empresa"});
  res.json(resultado.empresa)
})

//Rotas para empresas

app.get("/empresas/:id", async function(req, res){
  const resultado = await empresa.findByPk(req.params.id);
  res.json(resultado);
});

app.get("/empresas", async function(req, res){
  const resultado = await empresa.findAll();
  res.json(resultado);
});

app.post("/empresas", function(req, res){
  const resultado = empresa.create(req.body);
  res.json(resultado);
});

app.put("/empresas/:id", async function(req, res){
  var atualizar = await empresa.findByPk(req.params.id);
  
  var resultado = await atualizar.update(req.body);
  res.json(resultado);
})

app.delete("/empresas/:id", async function(req, res){
  const deletar = await empresa.findByPk(req.params.id);
  deletar.destroy();
})

app.get("/empresas/:id/usuarios", async function(req, res){
  const resultado = await empresa.findByPk(req.params.id, {include: "usuarios"});
  res.json(resultado.usuarios)
})

app.listen(3000, function(){
  console.log("Server it's ok!")
})

