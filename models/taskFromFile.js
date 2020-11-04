const fs = require('fs');
const path = require('path');
const pathToRegularTaskFile = path.join(path.dirname(process.mainModule.filename), 'data','regularTask.json');
const pathToRegularWorkFile = path.join(path.dirname(process.mainModule.filename), 'data','regularWork.json');


//let toDoLust = [];
//let toDoWorkList = [];

module.exports = class Task {
    constructor(task){//сушность
        this.description = task;//объект, их может быть больше
        
    }
    saveTask(){
        fs.readFile(pathToRegularTaskFile,(error, fileContent)=>{
            let tasks = [];

            if(!error){
                tasks = JSON.parse(fileContent);
            }else{
                console.log(error);
            
            }
            tasks.push(this);
            
            fs.writeFile(pathToRegularTaskFile, JSON.stringify(tasks),(error)=>{
                console.log('Error', error);
            });



        });

       // toDoLust.push(this);//сохранить
    }
    
    static fetchTasks(callBack){ //callBack очень нужно !
        fs.readFile(pathToRegularTaskFile,(error, fileContent)=>{
            if (error) {
                callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    }

    saveWork(){
        /*toDoWorkList.push(this);//сохранить*/
        fs.readFile(pathToRegularWorkFile,(error, fileContent)=>{
            let tasksWork = [];

            if(!error){
                tasksWork = JSON.parse(fileContent);
            }else{
                console.log(error);
            
            }
            tasksWork.push(this);
            
            fs.writeFile(pathToRegularWorkFile, JSON.stringify(tasksWork),(error)=>{
                console.log('Error', error);
            });



        });
    }
    
    static fetchWorks(callBackWork){
       /* return toDoWorkList;//возврат информации*/
       fs.readFile(pathToRegularWorkFile,(error, fileContent)=>{
        if (error) {
            callBackWork([]);
        }
        callBackWork(JSON.parse(fileContent));
    });
    }

    static deletItem(description){
        fs.readFile(pathToRegularTaskFile,(error,fileContent)=>{
            let tasks=[];
            if (!error) {
              tasks=JSON.parse(fileContent);
               
            }
            for (let i = 0; i < tasks.length; i++) {
                if(tasks[i].description === description){
                    console.log(tasks[i].description," deleted");
                    tasks.splice(i,1);//удаляет эелемент, i на каком индексе, 1 количество значений
                    break;
                }
            }
            fs.writeFile(pathToRegularTaskFile, JSON.stringify(tasks),(error)=>{
                console.log("Error while trying to deleting", error);
                
            })
        });

    }
    static deletWorkItem(description){
        fs.readFile(pathToRegularWorkFile,(error,fileContent)=>{
            let workTasks=[];
            if (!error) {
                workTasks=JSON.parse(fileContent);
               
            }
            for (let i = 0; i < workTasks.length; i++) {
                if(workTasks[i].description === description){
                    console.log(workTasks[i].description," deleted");
                    workTasks.splice(i,1);//удаляет эелемент, i на каком индексе, 1 количество значений
                    break;
                }
            }
            fs.writeFile(pathToRegularWorkFile, JSON.stringify(workTasks),(error)=>{
                console.log("Error while trying to deleting", error);
                
            })
        });

    }

}
