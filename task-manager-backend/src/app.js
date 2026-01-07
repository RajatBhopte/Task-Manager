import express from 'express';

const app = express();


app.get('/' , (req , res)=>{
    res.send("Backend is ready");
});


export default app;

