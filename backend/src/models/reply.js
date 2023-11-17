import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReplySchema = new Schema ({
    content:{
        type: String,
    },
});

const Reply = mongoose.model("reply", ReplySchema);
export default Reply;
