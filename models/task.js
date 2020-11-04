const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const WorkSchema = mongoose.Schema;

const taskSchema = new Schema({
    description: {
        type: String//тип данных
    }
});

mongoose.model('Task', taskSchema);
/*----------------------------------------*/
const taskWorkSchema = new WorkSchema({
    description: {
        type: String//тип данных
    }
});

mongoose.model('WorkTask', taskWorkSchema);