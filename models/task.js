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


}
