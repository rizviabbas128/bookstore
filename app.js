const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');

const app = express();

const url = `mongodb+srv://bookstore:bookstore@cluster0.u5u83wr.mongodb.net/?retryWrites=true&w=majority`;

//middleware
app.use(express.json());
app.use(cors());
app.use("/books", router) // localhost:5000/books



mongoose.connect(url).then(() => console.log("Connected to MongoDB")).then(() => {
    app.listen(5000, () => console.log("Server is up at Port 5000"));
}).catch(() => console.log("Connection failed"));