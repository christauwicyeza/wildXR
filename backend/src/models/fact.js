import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FactSchema = new Schema ({
    content:{
        type: String,
    },
});

const Fact = mongoose.model("fact", FactSchema);
export default Fact;
