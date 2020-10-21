const date = require('../generateDate');
const Task = require('../models/task');
//let toDoWork = [];

exports.getMainPageWork = ("/work",(req,res)=>{
    let weekday = date.getDate();
    const itemsList = Task.fetchWorks();//fetchTasks - смотрит, чтобы там что-то было, и возвращае значение.
    /*let weekday = date.getWeekDay();
    console.log(day);*/
    res.render("work.ejs", {date: weekday, toDoWork: itemsList});
});

exports.postNewWork = (req, res)=>{
    const item = new Task(req.body.newTask);
    item.saveWork();
    /*let newTask = req.body.newTask;
    toDoWork.push(newTask);*/
    res.redirect("/work");
};