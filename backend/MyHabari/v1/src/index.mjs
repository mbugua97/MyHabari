//app dependancies
import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'


//imports
import router from "./routes/index.mjs";

const app = express()

const secret=process.env.CookieSecret

app.use(cookieParser(secret))
app.use(express.json());


app.use(cors({
    origin: true,
    credentials: true
}))



//app routes
app.use('/api/v1',router)



const PORT = process.env.PORT 


app.listen(PORT, () => {console.log(`server running at port: ${PORT}`)})