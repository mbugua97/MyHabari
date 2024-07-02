import express from "express";



import router from "./src/routes/index.mjs";


const app = express()


app.use(router)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`server running at port: ${PORT}`)})