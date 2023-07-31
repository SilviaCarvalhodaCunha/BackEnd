import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import clientRoutes from "./routes/client.routes"
import loginRoutes from "./routes/login.routes"
import contactRoutes from "./routes/contact.routes"

const app: Application = express()
app.use(express.json())

app.use('/client', clientRoutes)
app.use('/login', loginRoutes)
app.use('/contact', contactRoutes)

app.use(handleErrors)

export default app