import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EducationContentSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    picture:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    summary:{
        type: String,
        required: true,
    },

});

const EducationContent = mongoose.model("EducationContent", EducationContentSchema);
export default EducationContent;