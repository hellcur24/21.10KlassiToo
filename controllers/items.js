const date = require('../generateDate');
const mongoose = require('mongoose');
//const Task = require('../models/task');
//let toDoList = [];

const Task = mongoose.model('Task');

exports.getMainPage = (req,res)=>{
    let day = date.getDate();
    Task.find((error, tasks)=>{
        if(!error){//если все хорошо, то выполняем 
            res.render("index.ejs", {date: day, toDoItems: tasks});
        }else{
            console.log("Fail to retireve data: ", error);
        }
    });
};
exports.postNewItem = (req, res)=>{
    const item = req.body.newTask;
    let newTask = new Task();
    newTask.description = item;//присваиванм, что пользователь ввел 
    
    newTask.save((error, response)=>{
        if(!error){
            res.redirect('/');

        }else{
            console.log(error);
        }
    });
};

exports.deletItem = (req,res)=>{
    console.log("Call from delete", req.body.checkbox);
    const checkItemId = req.body.checkbox;
    Task.findByIdAndRemove(checkItemId, function(error){
        if(!error){
            console.log("Successfully deleted the item.");
            res.redirect("/");
        }else{
            console.log(error);
        }
    });


}



/*exports.getMainPage = ("/",(req,res)=>{
    Task.fetchTasks(items=>{
        let day = date.getDate();
        res.render("index.ejs", {date: day, toDoItems: items});
    });
    /*let weekday = date.getDate();
    const itemsList = Task.fetchTasks();//fetchTasks - смотрит, чтобы там что-то было, и возвращае значение.
    /*let weekday = date.getWeekDay();
    console.log(day);*/
    /*res.render("index.ejs", {date: weekday, toDoItems: itemsList});
});

exports.postNewItem = (req, res)=>{
    const item = new Task(req.body.newTask);
    item.saveTask();
    let newTask = req.body.newTask;
    toDoList.push(newTask);
    res.redirect("/");
};


exports.deletItem = (req,res)=>{
    console.log("Call from delete", req.body.checkbox);
    Task.deletItem(req.body.checkbox);
    res.redirect('/');

}*/



