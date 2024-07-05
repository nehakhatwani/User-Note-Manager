const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
    id:{
        type: String,
        required: [true,"please add the id"],
    },
    task:{
        type: String,
        required: [true,"please add the note name"],
    },
    time:{
        type: String,
        required: [true,"please add the time of note"],
    },
    completed:{
        type: String,
        required: [true,"Yes/No"],
    }
    
});
const note=mongoose.model("Note" , noteSchema);
module.exports = note