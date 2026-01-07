import express  from 'express';

import  app from "./src/app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT , (req , res)=>{
    console.log(`Sever running on PORT http://localhost:${PORT}`);
})

