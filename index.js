const { application } = require("express")
const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates") 

app.get('/usuários'), (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`acessando dados do usuario${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
}

application.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

application.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})
