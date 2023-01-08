const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')

const app = express();

//Routes
app.get("/", (req,res) => {
    res.send("Hello Home Page")
})

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB()

        app.listen(PORT, () => {
            console.log(`Server running at Port: ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

startServer()