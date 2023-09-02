import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000



// app.get('/',(requisicao, resposta) =>{
//     resposta.send("Olá mundo!")
// })

// app.get('/',(requisicao, resposta) =>{
// })


app.listen(port, () =>{
    console.log(`Servidor rodando na port ${port}`)
})

