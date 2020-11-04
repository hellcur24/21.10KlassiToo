const date = require('../generateDate');
const mongoose = require('mongoose');
//const Task = require('../models/task');
//let toDoWork = [];

const Task = mongoose.model('WorkTask');

exports.getMainPageWork =(req,res)=>{
    let day = date.getDate();
    Task.find((error, tasks)=>{
        if(!error){//если все хорошо, то выполняем 
            res.render("work.ejs", {date: day, toDoWork: tasks});
        }else{
            console.log("Fail to retireve data: ", error);
        }
    });
};
exports.postNewWork = (req, res)=>{
    const item = req.body.newTask;
    let newTask = new Task();
    newTask.description = item;
    newTask.save((error, response)=>{
        if(!error){
            res.redirect('/work');

        }else{
            console.log(error);
        }
    });
};
exports.deletWorkItem = (req,res)=>{
    console.log("Call from delete", req.body.workcheckbox);
    const workCheckItemId = req.body.workcheckbox;
    Task.findByIdAndRemove(workCheckItemId, function(error){
        if(!error){
            console.log("Successfully deleted the item.");
            res.redirect("/work");
        }else{
            console.log(error);
        }
    });

}



/*exports.getMainPageWork = ("/work",(req,res)=>{
    Task.fetchWorks(itemsWork=>{
        let day = date.getDate();
        res.render("work.ejs", {date: day, toDoWork: itemsWork});
    });
    /*let weekday = date.getDate();
    const itemsList = Task.fetchWorks();//fetchTasks - смотрит, чтобы там что-то было, и возвращае значение.
    /*let weekday = date.getWeekDay();
    console.log(day);*/
   /*res.render("work.ejs", {date: weekday, toDoWork: itemsList});
});

exports.postNewWork = (req, res)=>{
    const item = new Task(req.body.newTask);
    item.saveWork();
    /*let newTask = req.body.newTask;
    toDoWork.push(newTask);
    res.redirect("/work");
};
exports.deletWorkItem = (req,res)=>{
    console.log("Call from delete", req.body.workcheckbox);
    Task.deletWorkItem(req.body.workcheckbox);
    res.redirect('/work');

}*/
