// in these file we write the logic for handling task 

// first import the task schema form ./models/task.model.js
import Task from '../models/task.models.js';

import mongoose from "mongoose";

export const createTask = async (req , res) =>{
    const task = req.body.task;
    if(!task || task === ""){
        return res.status(400).json({message : "Please add a task"});
    }

    try{
        const newtask = await Task.create({task:task});

        res.status(201).json(newtask);

    }catch(error){
        console.log(error);
        res.status(500).json({message : error.message});
    }

}

export const getAllTasks = async (req, res)=>{
    try{
         const tasks = await Task.find();
         res.status(200).json(tasks);
    }
    catch(error){
        res.status(500).json({message : "Sever Error"});
    }
}

export const updateTask = async (req , res)=>{
    const id = req.params.id;
    const {task , completed} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Task Id" });
    }
    try{
        const updateTask = await Task.findByIdAndUpdate(id , {task , completed} , {new:true});
        res.status(200).json(updateTask);
    }
    catch(error){
        res.status(500).json({message : "Sever Error"});    
    }

}

export const deleteTask = async (req , res)=>{
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid Task Id" });
    }
    try{
        await Task.findByIdAndDelete(id);
        res.status(200).json({message : "Task Deleted Successfully"});
    }
    catch(error){
        console.log(error);

        res.status(500).json({message : "Sever Error"});
    }

}



