const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require('./models/db');//соединение с базой данных происходит раньше, чем происходит маршрутизация файлов

const mainPage = require('./routes/main');
const mainPageWork = require('./routes/work');
const getError = require('./routes/404');

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.use(mainPageWork);
app.use(mainPage);
app.use(getError);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});