import User from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async(req, res)=> {
    try{
        const {fullName, email, password, preference,role} = req.body;
        const userExist = await User.findOne({email});
        const harshedPassword = await bcrypt.hash(password, 10);
        if (userExist)
        {
            res.status(403).send("user arleady exists");
        }

        const user = await User.create({
            fullName,
            email,
            role,
            password: harshedPassword,
         });

        const data = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role
         };

        return res.status(200).send(data);


    }
    catch (error){
        console.log (error);
    }
}

export const signIn = async(req, res) => {
    try{
        const { email, password} = req.body
        const userExists = await User.findOne({ email });

        if (!userExists) {
            return res.status(403).json({
                message: "Invalid user",
            })
        }
        const isPasswordValid = await bcrypt.compare(password, userExists.password);
        if (!isPasswordValid){
            return res.status(403).json({
                message: "Invalid password"
            });
        }
        const returnedUser = {
            id: userExists.id,
            fullName: userExists.fullName,
            email: userExists.email,
            role: userExists.role
        };
        const token = jwt.sign(returnedUser, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d",
        });
        return res.status(200).json({
            message: "Login Successful",
            user: returnedUser,
            token,
                });
    }catch (error){
        console.log (error);
    }
}