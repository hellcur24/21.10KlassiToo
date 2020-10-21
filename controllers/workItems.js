const date = require('../generateDate');

let toDoWork = [];

exports.getMainPageWork = ("/work",(req,res)=>{
    let day = date.getDate();
    let weekday = date.getWeekDay();
    console.log(day);
    res.render("work.ejs", {date: day, toDoWork: toDoWork});
});

exports.postNewWork = (req, res)=>{
    let newTask = req.body.newTask;
    toDoWork.push(newTask);
    res.redirect("/work");
};