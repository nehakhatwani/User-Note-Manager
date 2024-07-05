const errorHandler = require("./middlewares/errorHandler");

const connectDb = require("./config/dbConnections")

const express = require("express");

const app = express();

const port = 5000;

// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"get all contacts"});

// });

// app.get("/api/contacts/:id",(req,res)=>{
//     res.status(200).json({message: ${req.params.id}});

// });


// app.post("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"post all contacts"});
// });

// app.put("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"update all contacts"});
// });

// app.delete("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"delete contacts"});
// });


// app.listen(port,()=>{
//     console.log(server running onn port ${port});
// });
connectDb();
app.use(express.json());
app.use("/api/notes",require("./routes/noteroutes"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server running onn port ${port}`);

});
