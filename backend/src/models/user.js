import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "User",
    },
    preference:{
        type: [String],
        required: true,
    },

});

const User = mongoose.model("User", UserSchema);
export default User;
