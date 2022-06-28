import express from "express";
import handlebars from "express-handlebars";
/* Importaçao do Banco de dados  */ 
import db from "./src/config/db.js";

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
app.use(express.static(__dirname + '/src/static'));

/* Importaçao do Handlebars ->  Template*/
/* Procurando uma soluçao*/

/*
const hbs = handlebars.create({
    defaultLayout: "main"}
    )
app.engine('handlebars', () => hbs )
app.set('view engine', 'handlebars')
*/


/* Banco de dados e tratamento de erros */
db.on('error', ()=> {
    console.error.bind(console,error);
})

db.once("open",() => {
    console.log("Conexao com o banco de dados foi realizada com sucesso")
});


/* Consumo de API*//*
let CEP = (CEP) =>{
    let API = `https://viacep.com.br/ws/${CEP}/json/`
    return API.json()
}*/

/* Estruturaçao do Login */

/* O`que precisamos fazer ?, precisamos comparar se o login criado e se foi criando trazer a resposta se sim ou nao*/

/* Rotas Principal*/
app.get('/',(req,res) =>{
    /* Enviar um arquivo html*/
    res.sendFile(__dirname + '/src/templates/index.html')
} )
/* Rota Loja */
app.get('/loja',(req,res) => {
    res.sendFile(__dirname + '/src/templates/loja.html')
})
/* Rota Login */
app.get('/login',(req,res) => {
    res.sendFile(__dirname + '/src/templates/login.html')
})
/* Rota Loginacept */
/* Pagina só sera mostrada se estiver logado */
app.get('/loginacept',(req,res) => {
    res.sendFile(__dirname + '/src/templates/loginacept.html')

})
/* Rota registre */
app.get('/registro',(req,res) => {
    res.sendFile(__dirname + '/src/templates/registre.html')

})

/* Exportando os modulos para serem utilizados em outro lugar */
export default app 