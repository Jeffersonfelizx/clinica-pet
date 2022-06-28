import mongoose from 'mongoose'; 

/* Modelos para o banco de dados, quando estiver conectado.*/ 
const Modellogin = new mongoose.Schema({
    íd:{type: String},
    email:{type: String},
    senha:{type:String}
}) 


const login = mongoose.model('login', Modellogin)


/* Exportando o login model */
export default login; 