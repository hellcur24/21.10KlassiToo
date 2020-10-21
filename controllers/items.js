const date = require('../generateDate');
const Task = require('../models/task');
//let toDoList = [];

exports.getMainPage = ("/",(req,res)=>{
    let weekday = date.getDate();
    const itemsList = Task.fetchTasks();//fetchTasks - смотрит, чтобы там что-то было, и возвращае значение.
    /*let weekday = date.getWeekDay();
    console.log(day);*/
    res.render("index.ejs", {date: weekday, toDoItems: itemsList});
});

exports.postNewItem = (req, res)=>{
    const item = new Task(req.body.newTask);
    item.saveTask();
    /*let newTask = req.body.newTask;
    toDoList.push(newTask);*/
    res.redirect("/");
};






