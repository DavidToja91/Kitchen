const express= require('express');
const app=express();
const path = require('path');
const port= 3000;

/* MiddleWare */
app.use(express.static('public'));

/* Routes */
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.listen(port,()=> console.log(`Servidor corriendo en el puerto ${port}`));