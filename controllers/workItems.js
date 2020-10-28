const date = require('../generateDate');
const Task = require('../models/task');
//let toDoWork = [];

exports.getMainPageWork = ("/work",(req,res)=>{
    Task.fetchWorks(itemsWork=>{
        let day = date.getDate();
        res.render("work.ejs", {date: day, toDoWork: itemsWork});
    });
    /*let weekday = date.getDate();
    const itemsList = Task.fetchWorks();//fetchTasks - смотрит, чтобы там что-то было, и возвращае значение.
    /*let weekday = date.getWeekDay();
    console.log(day);*/
   /*res.render("work.ejs", {date: weekday, toDoWork: itemsList});*/
});

exports.postNewWork = (req, res)=>{
    const item = new Task(req.body.newTask);
    item.saveWork();
    /*let newTask = req.body.newTask;
    toDoWork.push(newTask);*/
    res.redirect("/work");
};
exports.deletWorkItem = (req,res)=>{
    console.log("Call from delete", req.body.workcheckbox);
    Task.deletWorkItem(req.body.workcheckbox);
    res.redirect('/work');

}
