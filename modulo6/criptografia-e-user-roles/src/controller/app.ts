import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3306, ()=>{
    console.log('Servidor rodando na porta 3306')
})

export default app