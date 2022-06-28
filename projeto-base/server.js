/* PORT SERVER - ./src/Javascript/app.jsffersonfelix só modifique aqui caso necessite */
import app from './app.js'


// Porta do servidor| Configuraçao inicial por favor nao mecher 
const PORT =  process.env.PORT || 3000 


app.listen(PORT,() => {
    console.log(`Servidor rodando na http://localhost:${PORT}`)
})



/* CONFIG INICIAIS */
/*  PARA USAR O AMBIENTE DE EXECUÇAO Já preparado @JeffersonFelix -> npm run dev */ 
