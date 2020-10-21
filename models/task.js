let toDoLust = [];

module.exports = class Task {
    constructor(task){//сушность
        this.description = task;//объект, их может быть больше
        
    }
    saveTask(){
        toDoLust.push(this);//сохранить
    }
    
    static fetchTasks(){
        return toDoLust;//возврат информации
    }

}