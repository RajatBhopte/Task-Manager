import mongoose from 'mongoose';

const taskschema = new mongoose.Schema({
    task:
    {
        type:String,
        require:true,
    },
    completed:
    {
        type:Boolean,
        default:false
    },
    
},{timestamps:true});

const Task = mongoose.model('Task' , taskschema);

export default Task;

