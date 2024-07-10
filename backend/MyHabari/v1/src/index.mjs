//app dependancies
import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'


//imports
import router from "./routes/index.mjs";
import NewsCategory from "./routes/NewsContent/Categories/news.Categories.mjs";

const app = express()

app.use(cookieParser("mysecret"))
app.use(express.json());


app.use(cors({
    origin: true,
    credentials: true
}))



//app routes
app.use('/api/v1',router)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`server running at port: ${PORT}`)})