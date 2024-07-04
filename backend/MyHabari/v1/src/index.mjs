import express from "express";
import router from "./routes/index.mjs";
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cookieParser("mysecret"))
app.use(express.json());


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))



//app routes
app.use(router)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`server running at port: ${PORT}`)})