const asyncHandler = require("express-async-handler");
const Notes = require("../models/notesModel");

/*const notes=[
    { id: 1, task: "wake up", time: "7am", completed: "Y/N"},
    { id: 2, task: "drink water", time: "7:05am", completed: "Y/N"},
    { id: 3, task: "yoga", time: "7:30-8:15am", completed: "Y/N"},
    { id: 4, task: "shower", time: "8:30am", completed: "Y/N"},
    { id: 5, task: "breakfast", time:"9am", completed: "Y/N"},
    { id: 6, task: "study", time:"9:15-11:45am", completed: "Y/N"},
    { id: 7, task: "lunch", time:"12pm", completed: "Y/N"},
    { id: 8, task: "TV", time: "1pm", completed: "Y/N"},
]*/

const getNotes = asyncHandler(async (req,res)=>{
    const notes = await Notes.find();
    res.json(notes);
    res.status(200).json({message:"get all notes"});
});

const getNote = asyncHandler(async (req,res)=>{
    const id = (req.params.id); 
    try{
        const note = await Notes.findById(id);
        if(!note) {
            return res.status(404).json({message:"note not found"});
        }
        res.status(200).json(note);
    }catch(err){
        res.status(500).json({message: err.message});
    }

// const createNote = asyncHandler(async (req,res)=>{
//     console.log("the request bosy is:",req.body);
//     res.status(200).json({message:"add a notes"});
// });

// const updateNote = asyncHandler(async (req,res)=>{
//     res.status(200).json({message:"update notes"});
// });

// const deleteNote = asyncHandler(async (req,res)=>{
//     res.status(200).json({message:"delete notes"});
// });

// module.exports = {getNotes,getNote,createNote,updateNote,deleteNote};
});
const createNote = asyncHandler(async(req,res) => {
    console.log("The request body is:",req.body);
    const {id,task,time,completed}= req.body;
    if (!id || !task || !time || !completed ) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const note = await Notes.create({
        id,
        task,
        time,
        completed
    });
    res.status(201).json(note);
});

const updateNote = asyncHandler(async (req,res) => {
    const note = await Notes.findById(req.params.id);
    if(!note){
        res.status(404);
        throw new Error("Note not found");
    }
    const updatedNote = await Notes.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
   res.status(200).json(updatedNote);
});


const deleteNote = asyncHandler(async (req,res) => {
    const note = await Notes.findById(req.params.id);
    if(!note){
        res.status(404);
        throw new Error("Note not found");
    }
    await Notes.deleteOne({_id:req.params.id });
    res.status(200).json({message: "Note deleted successfully",note});
});

module.exports = {getNotes,getNote,createNote,updateNote,deleteNote};