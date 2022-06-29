import express from "express";
import {engine} from 'express-handlebars';
/* Importaçao do Banco de dados  */ 
import db from "./config/db.js";

/* Pelo amor de deus nunca apague isto aqui, foi a unica soluçao encontrada na ultima camada da deepweb*/
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* Usablidade da aplicacao*/
const app = express()

/* Importaçao do express para formato json */
app.use(express.json())

/*  Importaçao dos arquivos estaticos */
app.use(express.static(__dirname + '/public'));

/* Handlebars */
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

/* Banco de dados e tratamento de erros */
db.on('error', ()=> {
    console.error.bind(console,error);
})

db.once("open",() => {
    console.log("Conexao com o banco de dados foi realizada com sucesso")
});

/* Estruturaçao do Login */

/* O`que precisamos fazer ?, precisamos comparar se o login criado e se foi criando trazer a resposta se sim ou nao*/

/* Rotas Principal*/
app.get('/',(req,res) =>{
    /* Enviar um arquivo html*/
    res.render('index')
} )
/* Rota Loja */
app.get('/loja',(req,res) => {
    res.render('loja')
})
/* Rota Login */
app.get('/registre',(req,res) => {
    res.render('registre')
})

/* Exportando os modulos para serem utilizados em outro lugar */
export default app 