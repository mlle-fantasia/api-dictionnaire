const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({origin: '*'}));

//var dictionnaire = require('./dico.json')
//var dictionnairePrenom = require('./dico.json')
var dicoNomCommun = require("./dico.json");
var dicoVille = require("./dicoVilleFrance.json");
var dicoPrenom = require("./dicoPrenomMonde.json");

app.get('/', function (req, res) {

	let mot =  dicoNomCommun[Math.floor(dicoNomCommun.length * Math.random())];
  res.send({mot: mot});
})

app.get('/prenom', function (req, res) {
	let prenom =  dicoPrenom[Math.floor(dicoPrenom.length * Math.random())];
  res.send({prenom: prenom.prenom});
})

app.get('/ville', function (req, res) {
	let ville =  dicoVille[Math.floor(dicoVille.length * Math.random())];
  res.send({ville: ville.Nom_commune});
})

app.listen(5001, function () {
  console.log('Example app listening on port 5001!')
})