const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/toDoWorkListDB',{useNewUrlParser: true, useUnifiedTopology:true});
require('./task');