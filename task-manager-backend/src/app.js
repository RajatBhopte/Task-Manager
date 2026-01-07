import express from 'express';

const app = express();


import taskRoutes from './routes/taskroutes.js';

app.use(express.json());

app.use('/api/tasks' , taskRoutes);



app.get('/' , (req , res)=>{
    res.send("Backend is ready");
});


export default app;

