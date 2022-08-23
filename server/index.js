const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const productRoter = require("./routes/productRoutes");
const app = express();
app.use(express.json());
app.use("/product", productRoter)


dotenv.config({ path: '.env' });

const port = process.env.PORT;
const url = process.env.SERVER_URL;

app.listen(port, url, () => {
    console.log(`listening on ${url}:${port}`);
});