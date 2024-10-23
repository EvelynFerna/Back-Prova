const express = require ('express')
const router = express.Router();

const clientes = require('./controllers/clientes')
const estacionamento = require ('./controllers/estacionamento')
const telefone = require ('./controllers/telefones')
const quartos = require ('./controllers/quartos')
const reservas = require ('./controllers/reservas')


const teste = (req,res) =>{
    res.json("API Hoteis respondendo com sucesso!");
}

router.get('/', teste);
router.post('/clientes', clientes.create); 
router.get('/clientes', clientes.read);
router.put('/clientes/:id',clientes.update);
router.delete('/clientes/:id', clientes.delete);


router.get('/', teste);
app.get('/');
app.post('/estacionamento', estacionamento.create); 
app.get('/estacionamento', estacionamento.read); 
app.delete('/estacionamento/:id', estacionamento.delete);
app.put('/estacionamento/:id', estacionamento.update); 

router.get('/', teste);
router.post('/telefone', telefone.create); 
router.get('/telefone', telefone.read);
app.delete('/telefone/:id', telefone.delete);
app.put('/telefone/:id', telefone.update); 


router.get('/', teste);
router.post('/quartos', quartos.create); 
router.get('/quartos', quartos.read);
app.delete('/quartos/:id', quartos.delete);
app.put('/quartos/:id', quartos.update); 


router.get('/', teste);
router.post('/reservas', reservas.create); 
router.get('/reservas', reservas.read);
app.delete('/reservas/:id', reservas.delete);
app.put('/reservas/:id', reservas.update); 


module.exports = router;

