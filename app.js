require('dotenv').config()
const express = require('express')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require('mongoose')
const routes = require("./router")
const errorMiddleware = require("./middlewares/errorMiddleware")

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'invoice.by',
    credentials: true,
  }));
app.use('/api', routes)
app.use(errorMiddleware)

const start = async() => {
    try {
        console.log("CONNECTING TO DB ...");
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))
    } catch (error) {
        console.log("ERROR", {error});
        console.log(error);

    }
}

start()