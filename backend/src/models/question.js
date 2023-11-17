import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuestionSchema = new Schema ({
    content:{
        type: String,
    },
});

const Question = mongoose.model("question", QuestionSchema);
export default Question;
