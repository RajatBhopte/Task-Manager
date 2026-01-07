import express from 'express';

const route = express.Router();

import {createTask , getAllTasks , updateTask , deleteTask} from '../controllers/task.controller.js';

route.post('/', createTask);
route.get('/', getAllTasks);
route.put('/:id', updateTask);
route.delete('/:id', deleteTask);


export default route;
