import mongoose from 'mongoose'; 

/* As configuraçoes do banco de dados estao corretas, por favor nao mecher*/

/* Configuraçao do banco de dados */
mongoose.connect = "mongodb+srv://jefferson:1234@clusteralura.r9kxtzl.mongodb.net/ClusterAlura"/* Banco de dados irar vim aqui*/

/* Po*/
let db = mongoose.connection; 

/* Exportando o banco de dados para ser utilizado em outros lugares*/

export default db 


