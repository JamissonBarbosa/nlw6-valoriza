import express from "express"
import { Response, Request } from "express"

const app = express()

//rotas
app.get('/metGet', (req: Request, res: Response) => {
    return res.send("Hello world metodo get nova rota")
})

app.get('/metGet:uuid', (req: Request, res: Response) => {
    return res.send("metodo get pesquisar por uuid")
})

app.post('/metPost', (req: Request, res: Response) => {
    return res.send("Hello Metodo Poste")
})


app.listen(3000, () => 
    console.log("Server is running")
)