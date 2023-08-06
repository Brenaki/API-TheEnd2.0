import express, { Response, Request } from "express";
import { router } from "./routes";

// Call funtion express to start the server
const app = express()

// Use the json to returns in the pages
app.use(express.json())

// Use the router
app.use(router)

// Home
app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        'English': 'Welcome to API of The End!', 
        'Portugues': 'Bem-vindo a API do Fim!'
    })
})

// Message from the server is ON
app.listen(5000, () => console.log('Server is ON'))